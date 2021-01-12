const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const youtube = require('youtube-sr');

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
        await youtube.search(video, { type: 'video' }).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            res.json(video);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

async function getVideoInfo(video, res) {
        if (!video) return res.json({ error: 'Wtf?' });
        await youtube.search(video, { limit: 1 }).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            const videoData = await ytdl.getBasicInfo(video[0].url);
            const info = videoData.videoDetails;
            res.json({ info });
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

async function searchPlaylist(playlist, res) {
        if (!playlist) return res.json({ error: 'Wtf?' });
        await youtube.search(playlist, { type: 'playlist' }).then(async playlist => {
            if (!video[0]) return res.json({ error: 'No playlist found!' });

            res.json({ playlist });
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

app.get("/", (req, res) => {
    return res.send('mert cimke#4741');
});

app.get("/api/youtube/play/:title", async (req, res) => {
    let video = decodeURIComponent(req.params.title);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await downloadVideo(video, res);
});

app.get("/api/youtube/search/:title", async (req, res) => {
    let video = decodeURIComponent(req.params.title);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await searchVideo(video, res);
});

app.get("/api/youtube/info/:title", async (req, res) => {
    let video = decodeURIComponent(req.params.title);
    if (!video) return res.json({ error: 'Invalid Parameters!' });
    return await getVideoInfo(video, res);
});

app.get("/api/youtube/playlist/:title", async (req, res) => {
    let playlist = decodeURIComponent(req.params.title);
    if (!playlist) return res.json({ error: 'Invalid Parameters!' });
    return await searchPlaylist(playlist, res);
});

app.listen(process.env.PORT, () => console.log("API Running!"));
