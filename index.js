const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const youtube = require('youtube-sr');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function downloadVideo(video, res) {
        if (!video) return res.json({ error: 'Wtf?' });
        await youtube.search(video, { limit: 1 }).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            var stream = await ytdl(video[0].id, { quality: 'highestaudio' });
            await stream.pipe(res);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

async function searchVideo(video, res) {
        if (!video) return res.json({ error: 'Wtf?' });
        await youtube.search(video).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            res.json(video);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

async function getVideoInfo(video, res) {
        if (!video) return res.json({ error: 'Wtf?' });
  
            const videoData = await ytdl.getBasicInfo(video);
            const info = videoData.videoDetails;
            res.json(info);
};

async function searchPlaylist(playlist, res) {
        if (!playlist) return res.json({ error: 'Wtf?' });
        await youtube.getPlaylist(playlist).then(async playlist => {
            if (!playlist) return res.json({ error: 'No playlist found!' });

            res.json(playlist);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

app.get("/", (req, res) => {
    return res.send('mert cimke#4741');
});

app.get("/api/youtube/play/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await downloadVideo(video, res);
});

app.get("/api/youtube/search/:title", async (req, res) => {
    let video = decodeURIComponent(req.params.title);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await searchVideo(video, res);
});

app.get("/api/youtube/info/*", async (req, res) => {
    let video = decodeURIComponent(req.params[0]);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await getVideoInfo(video, res);
});

app.get("/api/youtube/playlist/*", async (req, res) => {
    let playlist = decodeURIComponent(req.params[0]);
    if (!playlist) return res.json({ error: 'Invalid Parameters!' });
    return await searchPlaylist(playlist, res);
});

app.listen(process.env.PORT, () => console.log("API Running!"));
