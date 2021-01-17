const igm = require("instagram-fetcher");

const getMedia = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
        const link = igm.download(video).catch(err => res.json({ error: 'API Error: ' + err }));
        await link.pipe(res);
};


module.exports = {
   getMedia
};
