const card = document.getElementById("card");
let qIndex = 0;
let scores = [];              // points earned per question
let guesses = [];             // the answer the player landed on (undefined if timed out)
let timer = null;
let timeLeft = CONFIG.secondsPerQuestion;

/* ---------- answer matching ---------- */
function normalize(s){
    return s.toLowerCase().trim()
    .replace(/[-_]/g, " ")    // treat hyphens/underscores as spaces
    .replace(/\s+/g, " ")     // collapse repeated spaces
    .replace(/s$/, "");       // ignore a trailing plural "s"
}

// Returns the point value for a guess, or null if it isn't accepted.
function lookup(question, guess){
    if(!!question.pointOverride) {
        return { points: question.pointOverride, answerGuessed: guess, hint: null };
    }
    const g = normalize(guess);

    // Check if the user needs a hint
    for(const incorrectAnswerObject of question.incorrectAnswers){
        for(const possibleGuess of incorrectAnswerObject.accept){
            if(normalize(possibleGuess) === g) { 
                return { 
                    points: null,
                    answerGuessed: null,
                    hint: incorrectAnswerObject.hint
                }
            };
        }
    }

    // Check if the user got the answer right or wrong
    for(const answerObject of question.answers){
        for(const possibleAnswer of answerObject.accept){
            if(normalize(possibleAnswer) === g) { 
                return { 
                    points: answerObject.points,
                    answerGuessed: answerObject.answer,
                    hint: null
                }
            };
        }
    }
    return { points: null, answerGuessed: null, hint: null };
}

function tierLabel(pts){
    if(pts >= 100) return "⭐ CRILLION";
    if(pts >= 85)  return "🏮 Serious ball knowledge";
    if(pts >= 60)  return "🦑 Deep pull";
    if(pts >= 30)  return "🐟 Not bad";
    if(pts >= 15)  return "🧐 Fair enough";
    if(pts > 0)    return "🫧 Standard answer";
    return "⏰ Time's up";
}

// Emoji shown for a question's score in the shareable summary.
// (No true anglerfish emoji exists — 🏮 izakaya lantern stands in for the 85 tier.)
function emojiForPoints(pts){
    if(pts >= 100) return "⭐";   // star       — legendary
    if(pts >= 85)  return "🏮";   // angler fish — ultra rare
    if(pts >= 60)  return "🦑";   // squid       — rare
    if(pts >= 30)  return "🐟";   // fish        — uncommon
    if(pts >= 15)  return "🧀";   // cheese      - clever
    if(pts >= 10)  return "🫧";   // bubbles     — common
    return "⬛";                  // no points / timed out
}

// Build the text that gets copied to the clipboard.
function buildShareText(){
    const total = scores.reduce((a,b) => a + (b||0), 0);
    const max = QUESTIONS_WEEK_3.length * 100;
    // TODO: Update
    const emojis = QUESTIONS_WEEK_3.map((_, i) => emojiForPoints(scores[i] || 0)).join("");
    return `${CONFIG.gameTitle}\n${total} / ${max}\n${emojis}`;
}

// Copy text to the clipboard, with a fallback for insecure (file://) pages.
async function copyText(text){
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch(e){
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch(_){ ok = false; }
        document.body.removeChild(ta);
        return ok;
    }
}

// The color the whole bar shows at a given point value, interpolated
// along gray → blue → red → purple → gold.
function colorForPoints(v){
    const stops = [
        [10,  [154,164,178]],  // gray   — common
        [30,  [59,130,246]],   // blue   — uncommon
        [60,  [239,68,68]],    // red    — rare
        [85,  [168,85,247]],   // purple — ultra rare
        [100, [245,197,24]],   // gold   — legendary
    ];
    const rgb = a => `rgb(${a[0]},${a[1]},${a[2]})`;
    if(v <= stops[0][0]) return rgb(stops[0][1]);
    for(let i = 1; i < stops.length; i++){
        const [p0, c0] = stops[i-1], [p1, c1] = stops[i];
        if(v <= p1){
            const t = (v - p0) / (p1 - p0);
            return rgb([0,1,2].map(k => Math.round(c0[k] + (c1[k] - c0[k]) * t)));
        }
    }
    return rgb(stops[stops.length - 1][1]);
}

// Animate the points meter: fill shoots to `pts`% while the whole bar's
// color climbs through the spectrum, ending on the tier's solid color.
function showMeter(pts, onDone){
    const wrap = document.getElementById("meterWrap");
    const fill = document.getElementById("meterFill");
    const caption = document.getElementById("meterCaption");
    if(!wrap) return;

    const PRE_DELAY = 650;   // beat before the bar starts moving
    const DURATION  = 1600;  // how long the bar takes to fill

    wrap.style.display = "block";
    fill.style.width = "0%";
    fill.style.background = colorForPoints(0);
    caption.textContent = "";
    caption.classList.remove("reveal");

    setTimeout(() => {
    // Kick off the width animation on the next frame so the transition runs.
    requestAnimationFrame(() => { fill.style.width = pts + "%"; });

    // Grow the number and recolor the whole bar in step with the fill.
    const start = performance.now();
    (function tick(now){
        const t = Math.min((now - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3);           // easeOutCubic
        const value = eased * pts;
        fill.style.background = colorForPoints(value);
        caption.textContent = "+" + Math.round(value);     // just the number while filling
        if(t < 1){
            requestAnimationFrame(tick);
        } else {
            // Bar is full — now reveal the tier ("Rare!", "Legendary!", …).
            caption.textContent = tierLabel(pts) + "  +" + pts;
            caption.classList.add("reveal");
            if(onDone) onDone();
        }
    })(performance.now());
    }, PRE_DELAY);
}

/* ---------- timer ---------- */
function startTimer(){
    timeLeft = CONFIG.secondsPerQuestion;
    updateTimerUI();
    timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if(timeLeft <= 0){
        clearInterval(timer);
        scores[qIndex] = 0;
        const input = document.getElementById("guess");
        if(input) input.disabled = true;
        showMeter(0, showNextButton);
    }
    }, 1000);
}

function updateTimerUI(){
    const fill = document.getElementById("timerFill");
    const secs = document.getElementById("secs");
    if(!fill) return;
    fill.style.width = (timeLeft / CONFIG.secondsPerQuestion * 100) + "%";
    fill.className = "timer-fill" + (timeLeft <= 10 ? " danger" : timeLeft <= 25 ? " warn" : "");
    secs.textContent = timeLeft + "s";
}

function flash(kind, msg){
    const fb = document.getElementById("feedback");
    if(fb){ fb.className = "feedback " + kind; fb.textContent = msg; }
}

/* ---------- screens ---------- */
function renderStart(){
    card.innerHTML = `
    <div class="center">
        <h1>${CONFIG.gameTitle}</h1>
        <p class="tagline">${CONFIG.tagline}</p>
        <ul class="breakdown" style="text-align:left">
        <li><span>Questions</span><span class="pts">${QUESTIONS_WEEK_3.length}</span></li>
        <li><span>Time per question</span><span class="pts">${CONFIG.secondsPerQuestion}s</span></li>
        <li><span>
            <div class="leaderboard"> <details> 
                <summary class="summary"> Last week's scores </summary>
                <div class="name-list">
                    <div class="name-row firstname">
                        <span class="name">Varan/Jenny 🥇</span>
                        <span class="number">560</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Arthur 🥈</span>
                        <span class="number">435</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Oana 🥉</span>
                        <span class="number">385</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Iris</span>
                        <span class="number">375</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Harman</span>
                        <span class="number">370</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Dustin</span>
                        <span class="number">335</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Julia</span>
                        <span class="number">320</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Brian</span>
                        <span class="number">300</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Amy</span>
                        <span class="number">260</span>
                    </div>
                    <div class="name-row">
                        <span class="name">Andrew</span>
                        <span class="number">205</span>
                    </div>
                </div>
            </details></div>
        </span></li>
        </ul>
        <p class="hint" style="text-align:left">Spelling matters, no auto correct. Capitalization doesn't matter.</p>
        <button id="startBtn" style="font-size:20px;padding:16px 40px;margin-top:8px">▶ Play</button>
        <p class="def" style="text-align:center">💡 <b>Kriller</b> <i>noun</i>. 1. Person who plays the Crillion.</p>
        </div>
    `;
    document.getElementById("startBtn").onclick = () => {
    qIndex = 0; scores = []; guesses = [];
    slideToNext(renderQuestion);   // slide the first question up too
    };
}

function renderQuestion(){
    const q = QUESTIONS_WEEK_3[qIndex];
    card.innerHTML = `
    <h1>${CONFIG.gameTitle}</h1>
    <p class="tagline">${CONFIG.tagline}</p>
    <div class="meta">
        <span>Question ${qIndex+1} of ${QUESTIONS_WEEK_3.length}</span>
        <span id="secs">${CONFIG.secondsPerQuestion}s</span>
    </div>
    <div class="timer-track"><div class="timer-fill" id="timerFill"></div></div>
    <p class="question">${q.prompt}</p>
    <p class="questionSubtext">${q.description ?? ""}</p>
    <div class="input-row">
        <input type="text" id="guess" placeholder="Type your answer, press Enter…" autocomplete="off" autofocus />
    </div>
    <div class="feedback" id="feedback"></div>
    <div class="meter-wrap" id="meterWrap" style="display:none">
        <div class="meter"><div class="meter-fill" id="meterFill"></div></div>
        <div class="meter-caption" id="meterCaption"></div>
        <button id="nextBtn" class="next-btn" style="display:none"></button>
    </div>
    <p class="hint">Spelling matters! There is no auto correct.</p>
    `;
    const input = document.getElementById("guess");
    input.onkeydown = (e) => { if(e.key === "Enter") submitGuess(); };
    input.focus();
    startTimer();
}

function submitGuess(){
    const input = document.getElementById("guess");
    const guess = input.value;
    if (!guess.trim()) return;
    const q = QUESTIONS_WEEK_3[qIndex];
    const { points, answerGuessed, hint } = lookup(q, guess);
    if (points === null){
        flash("bad", `"${guess.trim()}" ${!!hint ? hint : "Nothing turned up"}`);
        input.value = "";
        input.focus();
        return;
    }
    clearInterval(timer);
    scores[qIndex] = points;
    guesses[qIndex] = answerGuessed;
    input.disabled = true;
    flash("", "");
    showMeter(points, showNextButton);
}

// Reveal the "Next question" button once the meter has finished animating.
function showNextButton(){
    const btn = document.getElementById("nextBtn");
    if(!btn) return;
    btn.textContent = (qIndex >= QUESTIONS_WEEK_3.length - 1) ? "See results →" : "Next question →";
    btn.style.display = "inline-block";
    btn.onclick = nextQuestion;
    btn.focus();
}

function endTheGame() {
    localStorage.setItem("completed", JSON.stringify({
        completed: true,
        guesses,
        scores,
    }));
    renderResults(guesses, scores);
}

function nextQuestion(){
    qIndex++;
    const render = qIndex >= QUESTIONS_WEEK_3.length ? endTheGame : renderQuestion;
    slideToNext(render);
}

// Slide the current screen up and off, then bring the next one up from below.
function slideToNext(render){
    card.classList.remove("slide-in-up");
    card.classList.add("slide-out-up");
    card.addEventListener("animationend", function handler(){
    card.removeEventListener("animationend", handler);
    card.classList.remove("slide-out-up");
    render();                          // swap in the next screen…
    card.classList.add("slide-in-up"); // …already positioned below, then slide up
    }, { once: true });
}

function renderResults(guessesList, scoresList){
    const total = scoresList.reduce((a,b)=>a+(b||0),0);
    const max = QUESTIONS_WEEK_3.length * 100;
    const rows = QUESTIONS_WEEK_3.map((q,i) => {
        const earned = scoresList[i] || 0;
        const yours = guessesList[i]
            ? `<span class="your-answer">${guessesList[i]}</span>`
            : `<span class="your-answer none">No answer</span>`;
        // Every accepted answer, best (highest points) first.
        const all = [...q.answers]
            .sort((a,b) => b.points - a.points)
            .map((answerObject) =>
            `<li class="ans-row">
                <div class="ans-line"><span>${answerObject.answer}</span><span class="pts">${answerObject.points}</span></div>
                ${answerObject.description ? `<div class="ans-desc">${answerObject.description}</div>` : ""}
            </li>`
            ).join("");

        const overrideAnswer = `
            <ul class="all-answers">
                <li class="ans-row">
                    <div class="ans-line">
                        <span>${yours}</span>
                        <span class="pts">${q.pointOverride}</span>
                    </div>
                </li>
            </ul>
        `

        return `
            <details class="result">
            <summary>
                <span class="q-info">
                <span class="q-prompt">${q.prompt}</span>
                ${yours}
                </span>
                <span class="pts">${earned}</span>
            </summary>
            ${!!q.pointOverride ? overrideAnswer : `<ul class="all-answers">${all} </ul>` }
            </details>
        `;
    }).join("");
    card.innerHTML = `
    <div class="center">
        <h1>Final Score</h1>
        <div class="score-big">${total}</div>
        <p class="tagline">Max score: ${max}</p>
    </div>
    <p class="hint">Click a question to see the answers that would have counted.</p>
    <div class="results-list">${rows}</div>
    <div class="center">
        <button id="share">Share your score</button>
        <button id="again" class="secondary">Play again (resets cache)</button>
        <div class="share-status" id="shareStatus"></div>
    </div>
    `;
    document.getElementById("again").onclick = () => {
        localStorage.clear();
        renderStart();
    };
    document.getElementById("share").onclick = async () => {
    const status = document.getElementById("shareStatus");
    const ok = await copyText(buildShareText());
    status.textContent = ok ? "Copied to clipboard — paste it anywhere!"
                            : "Couldn't copy automatically — select and copy the text above.";
    status.className = "share-status " + (ok ? "good" : "bad");
    };
}

/* ---------- boot ---------- */
const saved = localStorage.getItem("completed");

if (saved) {
    const gameState = JSON.parse(saved);

    if (gameState.completed) {
        renderResults(gameState.guesses, gameState.scores);
    }
} else {
    renderStart();
}