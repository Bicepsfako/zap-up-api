const igm = require("instagram-fetcher");

const getMedia = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
        const link = igm.download(video);
        await link.pipe(res);
        }).catch(err => res.json({ error: 'API Error: ' + err }));
};


module.exports = {
   getMedia
};
