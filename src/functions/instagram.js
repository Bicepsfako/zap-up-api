const igm = require("instagram-fetcher");

const getMedia = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
        const link = igm.download(video);
        await res.write(link);
};


module.exports = {
   getMedia
};
