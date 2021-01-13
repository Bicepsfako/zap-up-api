const ytdl = require("ytdl-core");
const youtube = require('youtube-sr');

const playVideo = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
        await youtube.search(video, { limit: 1 }).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            var stream = await ytdl(video[0].id, { quality: 'highestaudio' });
            await stream.pipe(res);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

const searchVideo = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });

        await youtube.search(video).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            res.json(video);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

const getVideoInfo = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
  
        const videoData = await ytdl.getBasicInfo(video);
        const info = videoData.videoDetails;
        res.json({ videoDetails: info });
};

const getPlaylist = async(playlist, res) => {
        if (!playlist) return res.json({ error: 'Wtf?' });
        await youtube.getPlaylist(playlist).then(async playlist => {
            if (!playlist) return res.json({ error: 'No playlist found!' });

            res.json(playlist);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

module.exports = {
   playVideo,
   searchVideo,
   getVideoInfo,
   getPlaylist
};
