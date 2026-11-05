function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const CONFIG = {
    gameTitle: "Crillion",
    tagline: "It's back.",
    secondsPerQuestion: 45,
}

const QUESTIONS_WEEK_3 = [
    {
        // Boston culture
        prompt: "Name a movie set in Boston",
        description: "Per wikipedia, there are 209.",
        answers: [
            { 
                answer: "21",
                points: 85,
                accept: ["21"],
                description: null,
            },
            { 
                answer: "61*",
                points: 85,
                accept: ["61*", "61"],
                description: null,
            },
            { 
                answer: "Adrenalin: Fear the Rush",
                points: 85,
                accept: ["Adrenalin: Fear the Rush", "Adrenalin", "Fear the Rush", "Adrenaline Fear the Rush"],
                description: null,
            },
            { 
                answer: "The Adventures of Bullwhip Griffin",
                points: 85,
                accept: ["The Adventures of Bullwhip Griffin", "Bullwhip Griffin", " Adventures of Bullwhip Griffin"],
                description: null,
            },
            { 
                answer: "Aftermath",
                points: 85,
                accept: ["Aftermath"],
                description: null,
            },
            { 
                answer: "Altered States",
                points: 85,
                accept: ["Altered States"],
                description: null,
            },
            { 
                answer: "American Fiction",
                points: 85,
                accept: ["American Fiction"],
                description: null,
            },
            { 
                answer: "Amistad",
                points: 85,
                accept: ["Amistad"],
                description: null,
            },
            { 
                answer: "Aquaman",
                points: 60,
                accept: ["Aquaman"],
                description: null,
            },
            { 
                answer: "The Automatic Hate",
                points: 85,
                accept: ["The Automatic Hate", "Automatic Hate"],
                description: null,
            },
            { 
                answer: "Ava",
                points: 85,
                accept: ["Ava"],
                description: null,
            },
            { 
                answer: "The Babe",
                points: 85,
                accept: ["The Babe", "babe"],
                description: null,
            },
            { 
                answer: "Bad Girls Go to Hell",
                points: 85,
                accept: ["Bad Girls Go to Hell"],
                description: null,
            },
            {
                answer: "Banjo",
                points: 85,
                accept: ["Banjo"],
                description: null,
            },
            {
                answer: "The Beekeeper",
                points: 60,
                accept: ["The Beekeeper", "Beekeeper"],
                description: null,
            },
            {
                answer: "Being Flynn",
                points: 85,
                accept: ["Being Flynn"],
                description: null,
            },
            {
                answer: "Between the Lines",
                points: 85,
                accept: ["Between the Lines"],
                description: null,
            },
            {
                answer: "Black Irish",
                points: 85,
                accept: ["Black Irish"],
                description: null,
            },
            {
                answer: "Black Mass",
                points: 85,
                accept: ["Black Mass"],
                description: null,
            },
            {
                answer: "Blow",
                points: 85,
                accept: ["Blow"],
                description: null,
            },
            {
                answer: "Blown Away",
                points: 85,
                accept: ["Blown Away"],
                description: null,
            },
            {
                answer: "Blue Hill Avenue",
                points: 85,
                accept: ["Blue Hill Avenue", "Blue Hill"],
                description: null,
            },
            {
                answer: "The Boondock Saints",
                points: 30,
                accept: ["The Boondock Saints", "Boondock Saints"],
                description: null,
            },
            {
                answer: "The Boondock Saints II: All Saints Day",
                points: 85,
                accept: [
                    "The Boondock Saints II: All Saints Day",
                    "Boondock Saints II: All Saints Day",
                    "The Boondock Saints 2: All Saints Day",
                    "Boondock Saints 2: All Saints Day",
                    "The Boondock Saints II",
                    "Boondock Saints II",
                    "The Boondock Saints 2",
                    "Boondock Saints 2",
                    "All Saints Day",
                    "The Boondock Saints II All Saints Day",
                    "Boondock Saints II All Saints Day",
                    "The Boondock Saints 2 All Saints Day",
                    "Boondock Saints 2 All Saints Day",
                ],
                description: null,
            },
            {
                answer: "The Boston Strangler",
                points: 85,
                accept: ["The Boston Strangler", "Boston Strangler"],
                description: null,
            },
            {
                answer: "The Boston Tea Party",
                points: 60,
                accept: ["The Boston Tea Party", "Boston Tea Party"],
                description: null,
            },
            {
                answer: "The Bostonians",
                points: 85,
                accept: ["The Bostonians", "Bostonians"],
                description: null,
            },
            {
                answer: "Brink's: The Great Robbery",
                points: 85,
                accept: ["Brink's: The Great Robbery", "The Great Robbery", "Great Robbery", "Brink's", "Brinks", "Brink's The Great Robbery"],
                description: null,
            },
            {
                answer: "The Brink's Job",
                points: 85,
                accept: ["The Brink's Job", "Brink's Job", "Brinks Job"],
                description: null,
            },
            {
                answer: "BUtterfield 8",
                points: 85,
                accept: ["BUtterfield 8", "Butterfield 8", "Butterfield"],
                description: null,
            },
            {
                answer: "By the Gun",
                points: 85,
                accept: ["By the Gun"],
                description: null,
            },
            {
                answer: "The Cardinal",
                points: 85,
                accept: ["The Cardinal", "Cardinal"],
                description: null,
            },
            {
                answer: "The Carey Treatment",
                points: 85,
                accept: ["The Carey Treatment", "Carey Treatment"],
                description: null,
            },
            {
                answer: "A Case of Deadly Force",
                points: 85,
                accept: ["A Case of Deadly Force", "Case of Deadly Force"],
                description: null,
            },
            {
                answer: "Celtic Pride",
                points: 85,
                accept: ["Celtic Pride"],
                description: null,
            },
            {
                answer: "Central Intelligence",
                points: 60,
                accept: ["Central Intelligence"],
                description: null,
            },
            {
                answer: "Children of Invention",
                points: 85,
                accept: ["Children of Invention"],
                description: null,
            },
            {
                answer: "Christmas Carol: The Movie",
                points: 85,
                accept: ["Christmas Carol: The Movie", "Christmas Carol"],
                description: null,
            },
            {
                answer: "The Christmas Chronicles 2",
                points: 85,
                accept: ["The Christmas Chronicles 2", "Christmas Chronicles 2"],
                description: null,
            },
            {
                answer: "Clothes Make the Pirate",
                points: 85,
                accept: ["Clothes Make the Pirate"],
                description: null,
            },
            {
                answer: "CODA",
                points: 100,
                accept: ["CODA"],
                description: "We visited a location from this movie while in Rockport!",
            },
            {
                answer: "Coma",
                points: 85,
                accept: ["Coma"],
                description: null,
            },
            {
                answer: "Confess, Fletch",
                points: 85,
                accept: ["Confess, Fletch", "Confess Fletch"],
                description: null,
            },
            {
                answer: "The Core",
                points: 85,
                accept: ["The Core", "Core"],
                description: null,
            },
            {
                answer: "The Country Girl",
                points: 85,
                accept: ["The Country Girl", "Country Girl"],
                description: null,
            },
            {
                answer: "Critic's Choice",
                points: 85,
                accept: ["Critic's Choice", "Critics Choice"],
                description: null,
            },
            {
                answer: "Dancing Pirate",
                points: 85,
                accept: ["Dancing Pirate"],
                description: null,
            },
            {
                answer: "Deep in My Heart",
                points: 85,
                accept: ["Deep in My Heart"],
                description: null,
            },
            {
                answer: "The Departed",
                points: 10,
                accept: ["The Departed", "Departed"],
                description: null,
            },
            {
                answer: "Dirty Tricks",
                points: 85,
                accept: ["Dirty Tricks"],
                description: null,
            },
            {
                answer: "The Drama",
                points: 30,
                accept: ["The Drama", "Drama"],
                description: null,
            },
            {
                answer: "Edge of Darkness",
                points: 60,
                accept: ["Edge of Darkness"],
                description: null,
            },
            {
                answer: "The Equalizer",
                points: 60,
                accept: ["The Equalizer", "Equalizer"],
                description: null,
            },
            {
                answer: "The Equalizer 2",
                points: 60,
                accept: ["The Equalizer 2", "Equalizer 2"],
                description: null,
            },
            {
                answer: "Everybody Wants to Be Italian",
                points: 85,
                accept: ["Everybody Wants to Be Italian"],
                description: null,
            },
            {
                answer: "Far and Away",
                points: 85,
                accept: ["Far and Away"],
                description: null,
            },
            {
                answer: "Fatherhood",
                points: 85,
                accept: ["Fatherhood"],
                description: null,
            },
            {
                answer: "Fear Strikes Out",
                points: 85,
                accept: ["Fear Strikes Out"],
                description: null,
            },
            {
                answer: "Fever Pitch",
                points: 85,
                accept: ["Fever Pitch"],
                description: null,
            },
            {
                answer: "Field of Dreams",
                points: 60,
                accept: ["Field of Dreams"],
                description: null,
            },
            {
                answer: "The Fighter",
                points: 85,
                accept: ["The Fighter", "Fighter"],
                description: null,
            },
            {
                answer: "The Forbidden Kingdom",
                points: 85,
                accept: ["The Forbidden Kingdom", "Forbidden Kingdom"],
                description: null,
            },
            {
                answer: "The Forger",
                points: 85,
                accept: ["The Forger", "Forger"],
                description: null,
            },
            {
                answer: "Free Fire",
                points: 85,
                accept: ["Free Fire"],
                description: null,
            },
            {
                answer: "The Friends of Eddie Coyle",
                points: 85,
                accept: ["The Friends of Eddie Coyle", "Friends of Eddie Coyle", "Eddie Coyle"],
                description: null,
            },
            {
                answer: "Fuzz",
                points: 85,
                accept: ["Fuzz"],
                description: null,
            },
            {
                answer: "The Game Plan",
                points: 85,
                accept: ["The Game Plan", "Game Plan"],
                description: null,
            },
            {
                answer: "Godmothered",
                points: 85,
                accept: ["Godmothered"],
                description: null,
            },
            {
                answer: "Godzilla: King of the Monsters",
                points: 100,
                accept: ["Godzilla: King of the Monsters", "Godzilla", "Godzilla King of the Monsters", "King of the Monsters"],
                description: "The climax of this movie is Boston getting blown up",
            },
            {
                answer: "Gone Baby Gone",
                points: 60,
                accept: ["Gone Baby Gone"],
                description: null,
            },
            {
                answer: "Good Will Hunting",
                points: 10,
                accept: ["Good Will Hunting"],
                description: null,
            },
            {
                answer: "The Great Debaters",
                points: 85,
                accept: ["The Great Debaters", "Great Debaters"],
                description: null,
            },
            {
                answer: "Green Street",
                points: 85,
                accept: ["Green Street"],
                description: null,
            },
            {
                answer: "Grey Lady",
                points: 85,
                accept: ["Grey Lady", "Gray Lady"],
                description: null,
            },
            {
                answer: "The Gumball Rally",
                points: 85,
                accept: ["The Gumball Rally", "Gumball Rally"],
                description: null,
            },
            {
                answer: "Guy and Madeline on a Park Bench",
                points: 85,
                accept: ["Guy and Madeline on a Park Bench", "Guy and Madeline"],
                description: null,
            },
            {
                answer: "Hanky Panky",
                points: 85,
                accept: ["Hanky Panky"],
                description: null,
            },
            {
                answer: "Harvard Man",
                points: 85,
                accept: ["Harvard Man"],
                description: null,
            },
            {
                answer: "The Heat",
                points: 85,
                accept: ["The Heat", "Heat"],
                description: null,
            },
            {
                answer: "Heist",
                points: 85,
                accept: ["Heist"],
                description: null,
            },
            {
                answer: "Hello Beautiful",
                points: 85,
                accept: ["Hello Beautiful"],
                description: null,
            },
            {
                answer: "Here Comes the Groom",
                points: 85,
                accept: ["Here Comes the Groom"],
                description: null,
            },
            {
                answer: "The Holdovers",
                points: 60,
                accept: ["The Holdovers", "Holdovers"],
                description: null,
            },
            {
                answer: "Holiday for Lovers",
                points: 85,
                accept: ["Holiday for Lovers"],
                description: null,
            },
            {
                answer: "Home Before Dark",
                points: 85,
                accept: ["Home Before Dark"],
                description: null,
            },
            {
                answer: "Honest Thief",
                points: 85,
                accept: ["Honest Thief"],
                description: null,
            },
            {
                answer: "The House of Magic",
                points: 85,
                accept: ["The House of Magic", "House of Magic"],
                description: null,
            },
            {
                answer: "Housesitter",
                points: 85,
                accept: ["Housesitter", "House Sitter"],
                description: null,
            },
            {
                answer: "How to Start a Revolution",
                points: 85,
                accept: ["How to Start a Revolution"],
                description: null,
            },
            {
                answer: "I Don't Know How She Does It",
                points: 85,
                accept: [
                    "I Dont Know How She Does It",
                    "Dont Know How She Does It",
                    "I Don't Know How She Does It",
                    "Don't Know How She Does It",
                ],
                description: null,
            },
            {
                answer: "I Know What You Did Last Summer",
                points: 85,
                accept: ["I Know What You Did Last Summer"],
                description: null,
            },
            {
                answer: "I Still Know What You Did Last Summer",
                points: 85,
                accept: ["I Still Know What You Did Last Summer"],
                description: null,
            },
            {
                answer: "Infinitely Polar Bear",
                points: 85,
                accept: ["Infinitely Polar Bear"],
                description: null,
            },
            {
                answer: "The Instigators",
                points: 85,
                accept: ["The Instigators", "Instigators"],
                description: null,
            },
            {
                answer: "It Ends with Us",
                points: 85,
                accept: ["It Ends with Us"],
                description: null,
            },
            {
                answer: "Jill Rips",
                points: 100,
                accept: ["Jill Rips"],
                description: null,
            },
            {
                answer: "Johnny Tremain",
                points: 85,
                accept: ["Johnny Tremain"],
                description: null,
            },
            {
                answer: "Journey to the Center of the Earth",
                points: 85,
                accept: [
                    "Journey to the Center of the Earth",
                    "Journey to Center of the Earth",
                    "Journey to the Centre of the Earth",
                    "Journey to Centre of the Earth",
                ],
                description: null,
            },
            {
                answer: "Karate Kid: Legends",
                points: 85,
                accept: ["Karate Kid: Legends", "Karate Kid", "Karate Kid Legends"],
                description: null,
            },
            {
                answer: "Killing Them Softly",
                points: 85,
                accept: ["Killing Them Softly"],
                description: null,
            },
            {
                answer: "The King of Fighters",
                points: 85,
                accept: ["The King of Fighters", "King of Fighters"],
                description: null,
            },
            {
                answer: "Knight and Day",
                points: 85,
                accept: ["Knight and Day"],
                description: null,
            },
            {
                answer: "Knowing",
                points: 85,
                accept: ["Knowing"],
                description: null,
            },
            {
                answer: "Knuckleball!",
                points: 85,
                accept: ["Knuckleball!", "Knuckleball"],
                description: null,
            },
            {
                answer: "The Last Aristocrats",
                points: 85,
                accept: ["The Last Aristocrats", "Last Aristocrats"],
                description: null,
            },
            {
                answer: "The Last Detail",
                points: 85,
                accept: ["The Last Detail", "Last Detail"],
                description: null,
            },
            {
                answer: "Last Flag Flying",
                points: 85,
                accept: ["Last Flag Flying"],
                description: null,
            },
            {
                answer: "Leap Year",
                points: 85,
                accept: ["Leap Year"],
                description: null,
            },
            {
                answer: "Little Monsters",
                points: 85,
                accept: ["Little Monsters"],
                description: null,
            },
            {
                answer: "The Love Letter",
                points: 85,
                accept: ["The Love Letter", "Love Letter"],
                description: null,
            },
            {
                answer: "Love of Your Life",
                points: 85,
                accept: ["Love of Your Life"],
                description: null,
            },
            {
                answer: "Love Story",
                points: 85,
                accept: ["Love Story"],
                description: null,
            },
            {
                answer: "Love, Rosie",
                points: 85,
                accept: ["Love, Rosie", "Love Rosie"],
                description: null,
            },
            {
                answer: "The Lovers",
                points: 85,
                accept: ["The Lovers", "Lovers"],
                description: null,
            },
            {
                answer: "The Maiden Heist",
                points: 85,
                accept: ["The Maiden Heist", "Maiden Heist"],
                description: null,
            },
            {
                answer: "The Marrying Man",
                points: 85,
                accept: ["The Marrying Man", "Marrying Man"],
                description: null,
            },
            {
                answer: "The Matchmaker",
                points: 85,
                accept: ["The Matchmaker", "Matchmaker"],
                description: null,
            },
            {
                answer: "Miracle on Ice",
                points: 60,
                accept: ["Miracle on Ice"],
                description: null,
            },
            {
                answer: "Mr. Peabody and the Mermaid",
                points: 85,
                accept: [
                    "Mr. Peabody and the Mermaid",
                    "Mr Peabody and the Mermaid",
                    "Mister Peabody and the Mermaid",
                    "Mister Peabody",
                    "Mr Peabody",
                    "Mr. Peabody"
                ],
                description: null,
            },
            {
                answer: "Moneyball",
                points: 60,
                accept: ["Moneyball"],
                description: null,
            },
            {
                answer: "Monument Ave.",
                points: 85,
                accept: ["Monument Ave.", "Monument Avenue"],
                description: null,
            },
            {
                answer: "Mrs. Winterbourne",
                points: 85,
                accept: ["Mrs. Winterbourne", "Mrs Winterbourne", "Winterbourne"],
                description: null,
            },
            {
                answer: "My Best Enemy",
                points: 85,
                accept: ["My Best Enemy"],
                description: null,
            },
            {
                answer: "My Best Friend's Girl",
                points: 85,
                accept: ["My Best Friend's Girl", "My Best Friends Girl"],
                description: null,
            },
            {
                answer: "Mystery Street",
                points: 85,
                accept: ["Mystery Street"],
                description: null,
            },
            {
                answer: "Mystic River",
                points: 30,
                accept: ["Mystic River"],
                description: null,
            },
            {
                answer: "Never Met Picasso",
                points: 85,
                accept: ["Never Met Picasso"],
                description: null,
            },
            {
                answer: "The Next Karate Kid",
                points: 85,
                accept: ["The Next Karate Kid", "Next Karate Kid"],
                description: null,
            },
            {
                answer: "Next Stop Wonderland",
                points: 85,
                accept: ["Next Stop Wonderland"],
                description: null,
            },
            {
                answer: "Night School",
                points: 85,
                accept: ["Night School"],
                description: null,
            },
            {
                answer: "Now, Voyager",
                points: 85,
                accept: ["Now, Voyager", "Now Voyager"],
                description: null,
            },
            {
                answer: "On Broadway",
                points: 85,
                accept: ["On Broadway"],
                description: null,
            },
            {
                answer: "Once Around",
                points: 85,
                accept: ["Once Around"],
                description: null,
            },
            {
                answer: "The Opposite Sex and How to Live with Them",
                points: 85,
                accept: [
                    "The Opposite Sex and How to Live with Them",
                    "Opposite Sex and How to Live with Them",
                ],
                description: null,
            },
            {
                answer: "Our Hearts Were Growing Up",
                points: 85,
                accept: ["Our Hearts Were Growing Up"],
                description: null,
            },
            {
                answer: "The Out-of-Towners",
                points: 85,
                accept: ["The Out-of-Towners", "Out-of-Towners", "Out of towners", "the out of towners"],
                description: null,
            },
            {
                answer: "Outbreak",
                points: 85,
                accept: ["Outbreak"],
                description: null,
            },
            {
                answer: "The Parent Trap",
                points: 60,
                accept: ["The Parent Trap", "Parent Trap"],
                description: null,
            },
            {
                answer: "Patriots Day",
                points: 30,
                accept: ["Patriots Day", "Patriot's day"],
                description: null,
            },
            {
                answer: "The Pentagon Papers",
                points: 85,
                accept: ["The Pentagon Papers", "Pentagon Papers"],
                description: null,
            },
            {
                answer: "The Perfection",
                points: 85,
                accept: ["The Perfection", "Perfection"],
                description: null,
            },
            {
                answer: "Physical Evidence",
                points: 85,
                accept: ["Physical Evidence"],
                description: null,
            },
            {
                answer: "Pieces",
                points: 85,
                accept: ["Pieces"],
                description: null,
            },
            {
                answer: "Pieces of a Woman",
                points: 85,
                accept: ["Pieces of a Woman"],
                description: null,
            },
            {
                answer: "Polly Ann",
                points: 100,
                accept: ["Polly Ann"],
                description: null,
            },
            {
                answer: "Portrait of Jennie",
                points: 85,
                accept: ["Portrait of Jennie"],
                description: null,
            },
            {
                answer: "Prey for the Devil",
                points: 85,
                accept: ["Prey for the Devil"],
                description: null,
            },
            {
                answer: "Private Parts",
                points: 85,
                accept: ["Private Parts"],
                description: null,
            },
            {
                answer: "A Private Scandal",
                points: 85,
                accept: ["A Private Scandal", "Private Scandal"],
                description: null,
            },
            {
                answer: "The Promise",
                points: 85,
                accept: ["The Promise", "Promise"],
                description: null,
            },
            {
                answer: "Proud Mary",
                points: 85,
                accept: ["Proud Mary"],
                description: null,
            },
            {
                answer: "R.I.P.D.",
                points: 85,
                accept: ["R.I.P.D.", "RIPD"],
                description: null,
            },
            {
                answer: "The Reckless Sex",
                points: 85,
                accept: ["The Reckless Sex", "Reckless Sex"],
                description: null,
            },
            {
                answer: "The Recruit",
                points: 85,
                accept: ["The Recruit", "Recruit"],
                description: null,
            },
            {
                answer: "Redeeming Love",
                points: 85,
                accept: ["Redeeming Love"],
                description: null,
            },
            {
                answer: "The River Wild",
                points: 85,
                accept: ["The River Wild", "River Wild"],
                description: null,
            },
            {
                answer: "Road to Boston",
                points: 85,
                accept: ["Road to Boston"],
                description: null,
            },
            {
                answer: "The Running Man",
                points: 60,
                accept: ["The Running Man", "Running Man"],
                description: null,
            },
            {
                answer: "Safe Haven",
                points: 85,
                accept: ["Safe Haven"],
                description: null,
            },
            {
                answer: "Saint Ralph",
                points: 85,
                accept: ["Saint Ralph", "St. Ralph", "St Ralph"],
                description: null,
            },
            {
                answer: "Sci-Fighters",
                points: 85,
                accept: ["Sci-Fighters", "Sci Fighters"],
                description: null,
            },
            {
                answer: "Second Sight",
                points: 100,
                accept: ["Second Sight"],
                description: null,
            },
            {
                answer: "The Silent Hour",
                points: 85,
                accept: ["The Silent Hour", "Silent Hour"],
                description: null,
            },
            {
                answer: "Small Town Girl",
                points: 85,
                accept: ["Small Town Girl"],
                description: null,
            },
            {
                answer: "The Social Network",
                points: 30,
                accept: ["The Social Network", "Social Network"],
                description: null,
            },
            {
                answer: "Some Girl(s)",
                points: 85,
                accept: ["Some Girl(s)", "Some Girls"],
                description: null,
            },
            {
                answer: "Southie",
                points: 85,
                accept: ["Southie"],
                description: null,
            },
            {
                answer: "Spenser Confidential",
                points: 85,
                accept: ["Spenser Confidential"],
                description: null,
            },
            {
                answer: "Spotlight",
                points: 60,
                accept: ["Spotlight"],
                description: null,
            },
            {
                answer: "Squeeze",
                points: 85,
                accept: ["Squeeze"],
                description: null,
            },
            {
                answer: "Starting Over",
                points: 85,
                accept: ["Starting Over"],
                description: null,
            },
            {
                answer: "Stonados",
                points: 85,
                accept: ["Stonados"],
                description: null,
            },
            {
                answer: "The Story of Alexander Graham Bell",
                points: 85,
                accept: [
                    "The Story of Alexander Graham Bell",
                    "Story of Alexander Graham Bell",
                    "Alexander Graham Bell"
                ],
                description: null,
            },
            {
                answer: "Stronger",
                points: 85,
                accept: ["Stronger"],
                description: null,
            },
            {
                answer: "Surrogates",
                points: 85,
                accept: ["Surrogates"],
                description: null,
            },
            {
                answer: "Ted",
                points: 30,
                accept: ["Ted"],
                description: null,
            },
            {
                answer: "Ted 2",
                points: 30,
                accept: ["Ted 2"],
                description: null,
            },
            {
                answer: "Temple Grandin",
                points: 85,
                accept: ["Temple Grandin"],
                description: null,
            },
            {
                answer: "That Darn Cat",
                points: 85,
                accept: ["That Darn Cat"],
                description: null,
            },
            {
                answer: "The House by the Cemetery",
                points: 85,
                accept: ["The House by the Cemetery", "House by the Cemetery"],
                description: null,
            },
            {
                answer: "The Thomas Crown Affair",
                points: 85,
                accept: ["The Thomas Crown Affair", "Thomas Crown Affair"],
                description: null,
            },
            {
                answer: "The Town",
                points: 30,
                accept: ["The Town", "Town"],
                description: null,
            },
            {
                answer: "Traduire",
                points: 85,
                accept: ["Traduire"],
                description: null,
            },
            {
                answer: "The Trumpet of the Swan",
                points: 85,
                accept: ["The Trumpet of the Swan", "Trumpet of the Swan"],
                description: null,
            },
            {
                answer: "Tuesdays with Morrie",
                points: 85,
                accept: ["Tuesdays with Morrie"],
                description: null,
            },
            {
                answer: "Two Years Before the Mast",
                points: 85,
                accept: ["Two Years Before the Mast", "2 years Before the mast"],
                description: null,
            },
            {
                answer: "Uncharted",
                points: 85,
                accept: ["Uncharted"],
                description: null,
            },
            {
                answer: "The Unholy",
                points: 85,
                accept: ["The Unholy", "Unholy"],
                description: null,
            },
            {
                answer: "United 93",
                points: 85,
                accept: ["United 93"],
                description: null,
            },
            {
                answer: "The Verdict",
                points: 85,
                accept: ["The Verdict", "Verdict"],
                description: null,
            },
            {
                answer: "The Walk",
                points: 85,
                accept: ["The Walk", "Walk"],
                description: null,
            },
            {
                answer: "War of the Worlds",
                points: 85,
                accept: ["War of the Worlds"],
                description: null,
            },
            {
                answer: "Warlock",
                points: 85,
                accept: ["Warlock"],
                description: null,
            },
            {
                answer: "WBCN and the American Revolution",
                points: 85,
                accept: ["WBCN and the American Revolution", "WBCN", "American Revolution"],
                description: null,
            },
            {
                answer: "What Doesn't Kill You",
                points: 85,
                accept: [
                    "What Doesn't Kill You",
                    "What Doesnt Kill You",
                ],
                description: null,
            },
            {
                answer: "What's Your Number?",
                points: 85,
                accept: [
                    "What's Your Number?",
                    "Whats Your Number?",
                    "What Is Your Number?",
                ],
                description: null,
            },
            {
                answer: "Wheelman",
                points: 85,
                accept: ["Wheelman"],
                description: null,
            },
            {
                answer: "Whitey: United States of America v. James J. Bulger",
                points: 85,
                accept: [
                    "Whitey: United States of America v. James J. Bulger",
                    "Whitey United States of America v. James J. Bulger",
                    "Whitey United States of America v James J Bulger",
                    "Whitey",
                    "United States of America v. James J. Bulger",
                    "United States of America v James J Bulger",
                ],
                description: null,
            },
            {
                answer: "Why Stop Now",
                points: 85,
                accept: ["Why Stop Now"],
                description: null,
            },
            {
                answer: "Witness Protection",
                points: 85,
                accept: ["Witness Protection"],
                description: null,
            },
            {
                answer: "A Woman of Distinction",
                points: 85,
                accept: ["A Woman of Distinction", "Woman of Distinction"],
                description: null,
            },
            {
                answer: "X2",
                points: 85,
                accept: ["X2", "X-Men 2", "X-Men United", "Xmen", "X-men", "Xmen 2", "Xmen United"],
                description: null,
            },
            {
                answer: "Yankee Doodle Bugs",
                points: 85,
                accept: ["Yankee Doodle Bugs"],
                description: null,
            },
            {
                answer: "The Year We Thought About Love",
                points: 85,
                accept: ["The Year We Thought About Love", "Year We Thought About Love"],
                description: null,
            },
            {
                answer: "Yennai Arindhaal",
                points: 85,
                accept: ["Yennai Arindhaal"],
                description: null,
            },
            {
                answer: "Zombie in a Penguin Suit",
                points: 85,
                accept: ["Zombie in a Penguin Suit"],
                description: null,
            },
            {
                answer: "Zookeeper",
                points: 60,
                accept: ["Zookeeper"],
                description: null,
            },
        ],
        incorrectAnswers: [],
        pointOverride: null,
    },
    {
        // Office 
        prompt: "Name a Canadian univeristy of which someone in the office is an alumni of",
        description: null,
        answers: [
            { 
                answer: "University of British Columbia",
                points: 60,
                accept: ["University of British Columbia", "BC", "UBC", "British Columbia"],
                description: null,
            },
            { 
                answer: "University of Toronto",
                points: 10,
                accept: ["University of Toronto", "Toronto", "U of T", "Saint George", "St George"],
                description: null,
            },
            { 
                answer: "McMaster University",
                points: 60,
                accept: ["McMaster", "McMaster University", "Mac"],
                description: null,
            },
            { 
                answer: "Western University",
                points: 30,
                accept: ["Western", "Western University"],
                description: null,
            },
            { 
                answer: "University of Waterloo",
                points: 10,
                accept: ["Waterloo", "University of Waterloo", "UW"],
                description: null,
            },
            { 
                answer: "Wilfrid Laurier University",
                points: 85,
                accept: ["Wilfrid Laurier University", "Laurier", "WLU", "Wilfrid Laurier"],
                description: null,
            },
            { 
                answer: "University of Calgary",
                points: 85,
                accept: ["Calgary", "U of C", "Calgary"],
                description: null,
            },
            { 
                answer: "Carleton University",
                points: 85,
                accept: ["Carleton", "Carleton University"],
                description: null,
            },
            { 
                answer: "Simon Fraser University",
                points: 100,
                accept: ["Simon Fraser", "Simon Fraser University", "SFU"],
                description: "Represented by Wayne Lo",
            },
            { 
                answer: "University of Toronto Scarborough",
                points: 60,
                accept: ["University of Toronto Scarborough", "Scarborough", "UTSC", "U of T Scarborough"],
                description: null,
            },
            { 
                answer: "McGill University",
                points: 85,
                accept: ["McGill University", "McGill"],
                description: null,
            },
        ],
        incorrectAnswers: [],
        pointOverride: null,
    },
    {
        // Personal
        prompt: "Name a company any Kriller has interned at",
        description: "(According to Linkedin)",
        answers: [
            // Harman
            { 
                answer: "HubSpot",
                points: 10,
                accept: ["HubSpot"],
                description: null,
            },
            { 
                answer: "Shopify",
                points: 30,
                accept: ["Shopify"],
                description: null,
            },
            { 
                answer: "Wealthsimple",
                points: 30,
                accept: ["Wealthsimple", "Wealth simple"],
                description: null,
            },
            { 
                answer: "RBC",
                points: 30,
                accept: ["RBC", "Royal Bank of Canada"],
                description: null,
            },
            { 
                answer: "ScriptString",
                points: 85,
                accept: ["ScriptString", "Script String"],
                description: null,
            },
            { 
                answer: "Imagine Cities",
                points: 85,
                accept: ["Imagine Cities"],
                description: null,
            },
            // Julia
            { 
                answer: "Martello Technologies",
                points: 85,
                accept: ["Martello Technologies", "Martello"],
                description: null,
            },
            { 
                answer: "NASA",
                points: 60,
                accept: ["NASA"],
                description: null,
            },
            // Me
            { 
                answer: "Sensei Labs",
                points: 85,
                accept: ["Sensei Labs", "Sensei"],
                description: null,
            },
            { 
                answer: "University of Toronto Scarborough Library",
                points: 85,
                accept: [
                    "University of Toronto Scarborough Library",
                    "UTSC Library",
                    "UTSC",
                    "University of Toronto Scarborough",
                    "Digital Scholarship Unit",
                    "U of T Library",
                    "University of Toronto Library",
                    "U of T",
                    "University of Toronto"
                ],
                description: null,
            },
            // Oana
            { 
                answer: "Thomson Reuters",
                points: 60,
                accept: ["Thomson Reuters"],
                description: null,
            },
            { 
                answer: "one37",
                points: 85,
                accept: ["one37"],
                description: null,
            },
            // Jenny
            { 
                answer: "CoreAVI",
                points: 85,
                accept: ["CoreAVI"],
                description: null,
            },
            { 
                answer: "Abliminal",
                points: 85,
                accept: ["Abliminal"],
                description: null,
            },
            { 
                answer: "Teranet inc",
                points: 85,
                accept: ["Teranet", "Teranet Inc"],
                description: null,
            },
            // Arthur
            { 
                answer: "IBM",
                points: 30,
                accept: ["IBM"],
                description: null,
            },
            { 
                answer: "Engineers Without Borders Canada",
                points: 85,
                accept: ["Engineers Without Borders Canada", "Engineers without borders"],
                description: null,
            },
            { 
                answer: "Clear Water Detailing",
                points: 85,
                accept: ["Clear Water Detailing", "Clear water"],
                description: null,
            },
            // Vgill
            { 
                answer: "Vidyard",
                points: 85,
                accept: ["Vidyard"],
                description: null,
            },
            { 
                answer: "TELUS",
                points: 60,
                accept: ["TELUS", "Telus digital"],
                description: null,
            },
            { 
                answer: "Equestrian Show Manager",
                points: 100,
                accept: [
                    "Equestrian Show Manager",
                    "Equestrian",
                    "Equestrian Show",
                    "Horse",
                    "Horse riding",
                    "Horse Show",
                ],
                description: "Varan worked here. Ask him.",
            },
            // Andrew
            { 
                answer: "Jewlr",
                points: 85,
                accept: ["Jewlr"],
                description: null,
            },
            // Dustin
            { 
                answer: "SeeAir, Inc",
                points: 85,
                accept: ["SeeAir, Inc", "SeeAir"],
                description: null,
            },
            { 
                answer: "Tyler Technologies",
                points: 85,
                accept: ["Tyler Technologies", "Tyler"],
                description: null,
            },
            // Alex
            { 
                answer: "Red hat",
                points: 60,
                accept: ["Red Hat"],
                description: null,
            },
            // Brian
            { 
                answer: "Amazon",
                points: 30,
                accept: ["Amazon"],
                description: null,
            },
            // Crystal
            { 
                answer: "Microsoft",
                points: 30,
                accept: ["Microsoft"],
                description: null,
            },
            { 
                answer: "Dayforce",
                points: 60,
                accept: ["Dayforce"],
                description: null,
            },
            { 
                answer: "University Health Network",
                points: 85,
                accept: ["University Health Network", "Health Network"],
                description: null,
            },
            { 
                answer: "Ceridian",
                points: 60,
                accept: ["Ceridian"],
                description: null,
            },
        ],
        incorrectAnswers: [],
        pointOverride: null,
    },
    {
        // Canada Geography 3.5/5
        prompt: "Name a city in Ontario with over 25,000 people",
        description: null,
        answers: [
            { 
                answer: "Toronto",
                points: 10,
                accept: ["Toronto"],
                description: null
            },
            { 
                answer: "Ottawa",
                points: 10,
                accept: ["Ottawa"],
                description: null
            },
            { 
                answer: "Mississauga",
                points: 30,
                accept: ["Mississauga"],
                description: null
            },
            { 
                answer: "Brampton",
                points: 30,
                accept: ["Brampton"],
                description: null
            },
            { 
                answer: "Hamilton",
                points: 30,
                accept: ["Hamilton"],
                description: null
            },
            { 
                answer: "London",
                points: 30,
                accept: ["London"],
                description: null
            },
            { 
                answer: "Markham",
                points: 30,
                accept: ["Markham"],
                description: null
            },
            { 
                answer: "Vaughan",
                points: 30,
                accept: ["Vaughan"],
                description: null
            },
            { 
                answer: "Kitchener",
                points: 30,
                accept: ["Kitchener"],
                description: null
            },
            { 
                answer: "Windsor",
                points: 30,
                accept: ["Windsor"],
                description: null
            },
            { 
                answer: "Oakville",
                points: 30,
                accept: ["Oakville"],
                description: null
            },
            { 
                answer: "Richmond Hill",
                points: 30,
                accept: ["Richmond Hill"],
                description: null
            },
            { 
                answer: "Burlington",
                points: 60,
                accept: ["Burlington"],
                description: null
            },
            { 
                answer: "Oshawa",
                points: 60,
                accept: ["Oshawa"],
                description: null
            },
            { 
                answer: "Sudbury",
                points: 60,
                accept: ["Sudbury"],
                description: null
            },
            { 
                answer: "Barrie",
                points: 60,
                accept: ["Barrie"],
                description: null
            },
            { 
                answer: "Guelph",
                points: 60,
                accept: ["Guelph"],
                description: null
            },
            { 
                answer: "Whitby",
                points: 60,
                accept: ["Whitby"],
                description: null
            },
            { 
                answer: "Cambridge",
                points: 60,
                accept: ["Cambridge"],
                description: null
            },
            { 
                answer: "St. Catharines",
                points: 60,
                accept: ["St. Catharines", "St Catharines", "Saint Catharines"],
                description: null
            },
            { 
                answer: "Milton",
                points: 60,
                accept: ["Milton"],
                description: null
            },
            { 
                answer: "Kingston",
                points: 30,
                accept: ["Kingston"],
                description: null
            },
            { 
                answer: "Ajax",
                points: 60,
                accept: ["Ajax"],
                description: null
            },
            { 
                answer: "Waterloo",
                points: 30,
                accept: ["Waterloo"],
                description: null
            },
            { 
                answer: "Thunder Bay",
                points: 60,
                accept: ["Thunder Bay"],
                description: null
            },
            { 
                answer: "Brantford",
                points: 60,
                accept: ["Brantford"],
                description: null
            },
            { 
                answer: "Chatham-Kent",
                points: 60,
                accept: ["Chatham-Kent", "Chatham", "Kent", "Chatham Kent"],
                description: null
            },
            { 
                answer: "Clarington",
                points: 85,
                accept: ["Clarington"],
                description: null
            },
            { 
                answer: "Pickering",
                points: 60,
                accept: ["Pickering"],
                description: null
            },
            { 
                answer: "Niagara Falls",
                points: 30,
                accept: ["Niagara Falls", "Niagara"],
                description: null
            },
            { 
                answer: "Newmarket",
                points: 60,
                accept: ["Newmarket"],
                description: null
            },
            { 
                answer: "Peterborough",
                points: 60,
                accept: ["Peterborough"],
                description: null
            },
            { 
                answer: "Kawartha Lakes",
                points: 85,
                accept: ["Kawartha Lakes", "Kawartha"],
                description: null
            },
            { 
                answer: "Caledon",
                points: 85,
                accept: ["Caledon"],
                description: null
            },
            { 
                answer: "Sault Ste. Marie",
                points: 60,
                accept: ["Sault Ste. Marie", "Sault Ste Marie", "Soo"],
                description: null
            },
            { 
                answer: "Sarnia",
                points: 60,
                accept: ["Sarnia"],
                description: null
            },
            { 
                answer: "Norfolk",
                points: 85,
                accept: ["Norfolk"],
                description: null
            },
            { 
                answer: "Halton Hills",
                points: 85,
                accept: ["Halton Hills", "Halton"],
                description: null
            },
            { 
                answer: "Aurora",
                points: 60,
                accept: ["Aurora"],
                description: null
            },
            { 
                answer: "Welland",
                points: 85,
                accept: ["Welland"],
                description: null
            },
            { 
                answer: "Belleville",
                points: 85,
                accept: ["Belleville"],
                description: null
            },
            { 
                answer: "North Bay",
                points: 85,
                accept: ["North Bay"],
                description: null
            },
            { 
                answer: "Whitchurch-Stouffville",
                points: 85,
                accept: ["Whitchurch-Stouffville", "Whitchurch", "Stouffville", "Whitchurch Stouffville"],
                description: null
            },
            { 
                answer: "Haldimand",
                points: 85,
                accept: ["Haldimand"],
                description: null
            },
            { 
                answer: "Cornwall",
                points: 85,
                accept: ["Cornwall"],
                description: null
            },
            { 
                answer: "Georgina",
                points: 85,
                accept: ["Georgina"],
                description: null
            },
            { 
                answer: "Woodstock",
                points: 85,
                accept: ["Woodstock"],
                description: null
            },
            { 
                answer: "Quinte West",
                points: 85,
                accept: ["Quinte West"],
                description: null
            },
            { 
                answer: "New Tecumseth",
                points: 85,
                accept: ["New Tecumseth"],
                description: null
            },
            { 
                answer: "Innisfil",
                points: 85,
                accept: ["Innisfil"],
                description: null
            },
            { 
                answer: "Bradford West Gwillimbury",
                points: 85,
                accept: ["Bradford West Gwillimbury", "Bradford", "Gwillimbury", "West Gwillimbury"],
                description: null
            },
            { 
                answer: "St. Thomas",
                points: 85,
                accept: ["St. Thomas", "Saint Thomas", "St Thomas"],
                description: null
            },
            { 
                answer: "Timmins",
                points: 100,
                accept: ["Timmins"],
                description: null
            },
            { 
                answer: "Lakeshore",
                points: 85,
                accept: ["Lakeshore"],
                description: null
            },
            { 
                answer: "Brant",
                points: 85,
                accept: ["Brant"],
                description: null
            },
            { 
                answer: "East Gwillimbury",
                points: 85,
                accept: ["East Gwillimbury"],
                description: null
            },
            { 
                answer: "Orillia",
                points: 85,
                accept: ["Orillia"],
                description: null
            },
            { 
                answer: "Stratford",
                points: 85,
                accept: ["Stratford"],
                description: null
            },
            { 
                answer: "Fort Erie",
                points: 85,
                accept: ["Fort Erie", "Erie"],
                description: null
            },
            { 
                answer: "LaSalle",
                points: 85,
                accept: ["LaSalle"],
                description: null
            },
            { 
                answer: "Centre Wellington",
                points: 85,
                accept: ["Centre Wellington", "Wellington"],
                description: null
            },
            { 
                answer: "Orangeville",
                points: 60,
                accept: ["Orangeville"],
                description: null
            },
            { 
                answer: "Leamington",
                points: 100,
                accept: ["Leamington"],
                description: null
            },
            { 
                answer: "Grimsby",
                points: 85,
                accept: ["Grimsby"],
                description: null
            },
            { 
                answer: "King",
                points: 85,
                accept: ["King"],
                description: null
            },
            { 
                answer: "Woolwich",
                points: 85,
                accept: ["Woolwich"],
                description: null
            },
            { 
                answer: "Clarence-Rockland",
                points: 85,
                accept: ["Clarence-Rockland", "Clarence", "Rockland", "Clarence Rockland"],
                description: null
            },
            { 
                answer: "Lincoln",
                points: 85,
                accept: ["Lincoln"],
                description: null
            },
            { 
                answer: "Prince Edward",
                points: 85,
                accept: ["Prince Edward"],
                description: null
            },
            { 
                answer: "Wasaga Beach",
                points: 60,
                accept: ["Wasaga Beach", "Wasaga"],
                description: null
            }
        ],
        incorrectAnswers: [],
        pointOverride: null,
    },
    {
        // Personal
        prompt: "Name someone in Connor or Brian's family",
        description: "",
        answers: [
            { 
                answer: "Connor",
                points: 10,
                accept: ["Connor"],
                description: null,
            },
            { 
                answer: "Ronan",
                points: 85,
                accept: ["Ronan"],
                description: null,
            },
            { 
                answer: "Eleri",
                points: 100,
                accept: ["Eleri"],
                description: null,
            },
            { 
                answer: "Bronwen",
                points: 85,
                accept: ["Bronwen", "Bron"],
                description: null,
            },
            { 
                answer: "Sheldon",
                points: 60,
                accept: ["Sheldon", "his worship", "Mayor"],
                description: null,
            },
            { 
                answer: "Brian",
                points: 10,
                accept: ["Brian"],
                description: null,
            },
            { 
                answer: "Matthew",
                points: 60,
                accept: ["Mathew", "Matthew", "Matt"],
                description: null,
            },
            { 
                answer: "Mario",
                points: 30,
                accept: ["Mario"],
                description: null,
            },
            { 
                answer: "Morrisa",
                points: 60,
                accept: [
                    "Morrisa",
                    "Morissa",
                    "Merrisa",
                    "Merissa", 
                ],
                description: null,
            }
        ],
        incorrectAnswers: [],
        pointOverride: null,
    },
    {
        // Local Cambridge 5/5
        prompt: "Name a street, road, avenue or highway near the office (within a 1/2 km)",
        answers: [
            { 
                answer: "Water Street",
                points: 60,
                accept: ["Water Street", "Water", "Water St"],
                description: null,
            },
            { 
                answer: "Morgan Avenue",
                points: 60,
                accept: ["Morgan Avenue", "Morgan", "Morgan Ave"],
                description: null,
            },
            { 
                answer: "North First Street",
                points: 85,
                accept: [
                    "North First Street",
                    "N First Street",
                    "N. First Street",
                    "North First St",
                    "N First St",
                    "N. First St",
                    "North First",
                    "N First",
                    "N. First",
                ],
                description: null,
            },
            { 
                answer: "Jacobs Street",
                points: 30,
                accept: ["Jacobs", "Jacobs Street", "Jacobs St"],
                description: null,
            },
            { 
                answer: "Glassworks Avenue",
                points: 30,
                accept: ["Glassworks", "Glassworks Avenue", "Glassworks Ave"],
                description: null,
            },
            { 
                answer: "Earhart Street",
                points: 100,
                accept: ["Earhart Street", "Earhart St", "Earhart"],
                description: "This very short street is right in front of Michael's building.",
            },
            { 
                answer: "East Street",
                points: 60,
                accept: ["East Street", "East St", "East"],
                description: null,
            },
            { 
                answer: "Child Street",
                points: 85,
                accept: ["Child Street", "Child St", "Child"],
                description: null,
            },
            { 
                answer: "Leighton Street",
                points: 60,
                accept: ["Leighton Street", "Leighton St", "Leighton"],
                description: null,
            },
            { 
                answer: "McGrath Highway",
                points: 30,
                accept: [
                    "Route 28",
                    "Monsignor O'Brien Highway",
                    "Msgr O'Brien Highway",
                    "Monsignor OBrien Highway",
                    "Msgr OBrien Highway",
                    "O'Brien Highway",
                    "O'Brien",
                    "Monsignor O'Brien",   
                    "Msgr O'Brien",                   
                    "McGrath Highway",
                    "McGrath",
                    "Monsignor O'Brien Hwy",
                    "Msgr O'Brien Hwy",
                    "McGrath Hwy",
                    "O'Brien Hwy",
                    "OBrien Highway",
                    "OBrien Hwy",
                    "OBrien",
                ],
                description: null,
            },
            { 
                answer: "Canal Park",
                points: 10,
                accept: ["Canal Park", "Canal Prk", "Canal"],
                description: null,
            },
            { 
                answer: "Charles River Dam Road",
                points: 60,
                accept: [
                    "Charles River Dam Road",
                    "Charles River Dam",
                    "Charles River Dam Rd",
                ],
                description: null,
            },
            { 
                answer: "Science Park",
                points: 60,
                accept: ["Science Park", "Science Prk", "Science"],
                description: null,
            },
            { 
                answer: "Gilmore Bridge",
                points: 85,
                accept: ["Gilmore Bridge", "Gilmore"],
                description: null,
            },
            { 
                answer: "Museum Way",
                points: 85,
                accept: ["Museum Way", "Museum",],
                description: null,
            },
            { 
                answer: "Education Circle",
                points: 85,
                accept: [
                    "Education Street",
                    "Education Circle",
                    "Education",
                    "Education St"
                ],
                description: null,
            },
            { 
                answer: "Route 93",
                points: 60,
                accept: ["Route 93", "Highway 93"],
                description: null,
            },
            { 
                answer: "Edwin H Land Boulevard",
                points: 60,
                accept: [
                    "Edwin H Land Boulevard",
                    "Edwin H Land",
                    "Edwin H Land blvd",
                    "Edwin",
                    "Edwin Land",
                    "Edwin Land Boulevard",
                    "Edwin Land",
                ],
                description: null,
            },
            { 
                answer: "Cambridge Parkway",
                points: 85,
                accept: ["Cambridge Parkway"],
                description: null,
            },
            { 
                answer: "Cambridgeside Place",
                points: 85,
                accept: ["Cambridgeside Place", "Cambridgeside"],
                description: null,
            },
            { 
                answer: "Rogers Street",
                points: 60,
                accept: ["Rogers Street", "Rogers St", "Rogers"],
                description: null,
            },
            { 
                answer: "Binney Street",
                points: 60,
                accept: ["Binney Street", "Binney St", "Binney"],
                description: null,
            },
            { 
                answer: "First Street",
                points: 10,
                accept: [
                    "First Street",
                    "First St",
                    "First",
                    "1st Street",
                    "1st St",
                    "1st",
                    "1 Street",
                    "1 St",
                    "1",
                ],
                description: null,
            },
            { 
                answer: "Second Street",
                points: 30,
                accept: [                   
                    "Second Street",
                    "Second St",
                    "Second",
                    "2nd Street",
                    "2nd St",
                    "2nd",
                    "2 Street",
                    "2 St",
                    "2"
                ],
                description: null,
            },
            { 
                answer: "Third Street",
                points: 30,
                accept: [                   
                    "Third Street",
                    "Third St",
                    "Third",
                    "3rd Street",
                    "3rd St",
                    "3rd",
                    "3 Street",
                    "3 St",
                    "3"
                ],
                description: null,
            },
            { 
                answer: "Sciarappa Street",
                points: 60,
                accept: [
                    "Fourth Street",
                    "Fourth St",
                    "Fourth",
                    "4th Street",
                    "4th St",
                    "4th",
                    "4 Street",
                    "4 St",
                    "4",
                    "Sciarappa Street",
                    "Sciarappa St",
                    "Sciarappa"
                ],
                description: null,
            },
            { 
                answer: "Fifth Street",
                points: 30,
                accept: [
                    "Fifth Street",
                    "Fifth St",
                    "Fifth",
                    "5th Street",
                    "5th St",
                    "5th",
                    "5 Street",
                    "5 St",
                    "5",
                ],
                description: null,
            },
            { 
                answer: "Bent Street",
                points: 85,
                accept: ["Bent Street", "Bent St", "Bent"],
                description: null,
            },
            { 
                answer: "Charles Street",
                points: 60,
                accept: ["Charles Street", "Charles St", "Charles"],
                description: null,
            },
            { 
                answer: "Hurley Street",
                points: 60,
                accept: ["Hurley Street", "Hurley St", "Hurley"],
                description: null,
            },
            { 
                answer: "Lopez Avenue",
                points: 85,
                accept: ["Lopez Avenue", "Lopez Ave", "Lopez"],
                description: null,
            },
            { 
                answer: "Spring Street",
                points: 60,
                accept: ["Spring Street", "Spring St", "Spring"],
                description: null,
            },
            { 
                answer: "Thorndike Street",
                points: 60,
                accept: ["Thorndike Street", "Thorndike St", "Thorndike"],
                description: null,
            },
            { 
                answer: "Otis Street",
                points: 60,
                accept: ["Otis Street", "Otis St", "Otis"],
                description: null,
            },
            { 
                answer: "Cambridge Street",
                points: 10,
                accept: ["Cambridge Street", "Cambridge St", "Cambridge"],
                description: null,
            },
            { 
                answer: "Gore Street",
                points: 60,
                accept: ["Gore", "Gore St", "Gore Street"],
                description: null,
            },
            { 
                answer: "Winter Street",
                points: 100,
                accept: ["Winter Street", "Winter St", "Winter"],
                description: null,
            },
            { 
                answer: "Stevens Court",
                points: 85,
                accept: ["Stevens Court", "Stevens Ct", "Stevens"],
                description: null,
            },
            { 
                answer: "Somerville bike path",
                points: 15,
                accept: ["Somerville bike path", "Somerville", "bike path"],
                description: "Not a road, but I'll count it",
            },
        ],
        incorrectAnswers: [
            {
                hint: "Too far away.",
                accept: [
                    "Tenoche",
                    "The Helmand",
                    "Helmand",
                    "Kiin Thai",
                    "Kiin Thai Sushi",
                    "Boca Grande",
                    "Boca Grande Taqueria"
                ]
            },
            {
                hint: "No longer operating",
                accept: ["Second Street Cafe", "Chipotle", "Panda Express"]
            }
        ],
        pointOverride: null,
    },
    {
        // Personal
        prompt: "Name someone who Connor doesn't like",
        description: "",
        answers: [
            { 
                answer: "Nobody!",
                points: 100,
                accept: [""],
                description: "This was a test",
            },
            { 
                answer: "Alex",
                points: 100,
                accept: ["Alex"],
                description: null,
            },
        ],
        incorrectAnswers: [],
        pointOverride: 100,
    },
];

