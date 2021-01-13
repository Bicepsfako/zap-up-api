const express = require("express");
const Spotify = require("spotify-api.js");
const YouTube = require("./functions/youtube.js");
const Auth = new Spotify.Auth();
const token = async () => { await Auth.get({
    client_id: "3d3e1615331a4076a367c9b947cf187d",
    client_secret: "e10cd4e285ae412e9e88a1b996977e41",
})
};
const spotify = new Spotify.Client(token);
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
    if(method == "search") return await YouTube.searchVideo(video, res);
    else if(method == "info") return await YouTube.getVideoInfo(video, res);
    else if(method == "playlist") return await YouTube.getPlaylist(video, res);
    break;
  default:
    return res.json({ error: 'Wtf?' });
}
};

app.get("/", (req, res) => {
    return res.send('mert cimke#4741');
});

// YOUTUBE API

app.get("/api/youtube/play/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, "youtube", "play", res);
});

app.get("/api/youtube/search/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, "youtube", "search", res);
});

app.get("/api/youtube/info/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, "youtube", "info", res);
});

app.get("/api/youtube/playlist/*", async (req, res) => {
    let playlist = decodeURIComponent(req.params[0]);
    if (!playlist) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(playlist, "youtube", "playlist", res);
});

// YOUTUBE API END
// SPOTIFY API START

app.get("/api/spotify/search/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, "spotify", "search", res);
});

app.get("/api/spotify/info/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(video, "spotify", "info", res);
});

app.get("/api/spotify/playlist/*", async (req, res) => {
    let playlist = decodeURIComponent(req.params[0]);
    if (!playlist) return res.json({ error: 'Invalid Parameters!' });
    return await Switch(playlist, "spotify", "playlist", res);
});

// SPOTIFY API END

app.listen(process.env.PORT, () => console.log("API Running!"));
