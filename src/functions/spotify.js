const Spotify = require("spotify-api.js");
const Auth = new Spotify.Auth();
const token = async () => { await Auth.get({
    client_id: "3d3e1615331a4076a367c9b947cf187d",
    client_secret: "e10cd4e285ae412e9e88a1b996977e41",
})
};
const spotify = new Spotify.Client(token);

const searchVideo = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });

        await spotify.tracks.search(video).then(async video => {
            if (!video[0]) return res.json({ error: 'No video found!' });

            res.json(video);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

const getVideoInfo = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
  
        const info = await spotify.tracks.get(video);
        res.json(info);
};

const getPlaylist = async(playlist, res) => {
        if (!playlist) return res.json({ error: 'Wtf?' });
        await spotify.playlists.get(playlist).then(async playlist => {
            if (!playlist) return res.json({ error: 'No playlist found!' });

            res.json(playlist);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};

module.exports = {
   searchVideo,
   getVideoInfo,
   getPlaylist
};
