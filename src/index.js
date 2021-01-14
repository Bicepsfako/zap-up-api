const express = require("express");
const YouTube = require("./functions/youtube.js");
const Spotify = require("./functions/spotify.js");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function Switch(video, type, method, res) {
        if (!video) return res.json({ error: 'Wtf?' });
        if (!type) return res.json({ error: 'Wtf?' });
        if (!method) return res.json({ error: 'Wtf?' });

        switch (type) {
  case 'youtube':
    if(method == "play") return await YouTube.playVideo(video, res);
    else if(method == "search") return await YouTube.searchVideo(video, res);
    else if(method == "info") return await YouTube.getVideoInfo(video, res);
    else if(method == "playlist") return await YouTube.getPlaylist(video, res);
    break;
  case 'spotify':
    if(method == "search") return await Spotify.searchVideo(video, res);
    else if(method == "info") return await Spotify.getVideoInfo(video, res);
    else if(method == "playlist") return await Spotify.getPlaylist(video, res);
    break;
  default:
    return res.json({ error: 'Wtf?' });
}
};

app.get("/", (req, res) => {
    return res.send('mert cimke#4741');
});

// YOUTUBE API

app.get("/api/:type/play/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    console.log(video);
    let type = decodeURIComponent(req.params.type);
    if (!video || !type) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, type, "play", res);
});

app.get("/api/:type/search/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    let type = decodeURIComponent(req.params.type);
    if (!video || !type) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, type, "search", res);
});

app.get("/api/:type/info/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    let type = decodeURIComponent(req.params.type);
    if (!video || !type) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, type, "info", res);
});

app.get("/api/:type/playlist/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    let type = decodeURIComponent(req.params.type);
    if (!video || !type) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, type, "playlist", res);
});

// YOUTUBE API END

app.listen(process.env.PORT, () => console.log("API Running!"));
