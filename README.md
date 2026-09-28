## Crillion 

Krillion, but worse.

### How to run it

To run the game locally, all you have to do it open the index.html file. 
- `game.js` Is where the logic lives, if you want to change the actual game code.
- `week2qs`/`week3qs` is where the questions and answers live. It's basically a big array of objects. Hopefully it's fairly clear how the questions and answers work.

### How to host it

To host it, I run two commands. It requires you have Cloudflared installed (`brew install cloudflared`):

```
python3 -m http.server 8000
cloudflared tunnel --url http://localhost:8000
```

From there, cloudflare will generate a temporary link for you. It only works if your laptop is running!
