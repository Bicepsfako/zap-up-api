const express = require("express");
const YouTube = require("./functions/youtube.js");
const Spotify = require("./functions/spotify.js");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

async function Switch(video, type, method, res) {
	if (!video) return res.json({
		error: 'The video is not specified.'
	});
	if (!type) return res.json({
		error: 'The platform is not specified.'
	});
	if (!method) return res.json({
		error: 'The method is not specified.'
	});

	switch (type) {
		case 'youtube':
			if (method == "play") return await YouTube.playVideo(video, res);
			else if (method == "search") return await YouTube.searchVideo(video, res);
			else if (method == "info") return await YouTube.getVideoInfo(video, res);
			else if (method == "playlist") return await YouTube.getPlaylist(video, res);
			break;
		case 'spotify':
			if (method == "search") return await Spotify.searchVideo(video, res);
			else if (method == "info") return await Spotify.getVideoInfo(video, res);
			else if (method == "playlist") return await Spotify.getPlaylist(video, res);
			break;
		default:
			return res.json({
				error: 'Wtf?'
			});
	}
};

app.get("/", (req, res) => {
	return res.send('mert cimke#4741');
});


app.get("/api/:type/:method/*", async(req, res) => {
	let video = decodeURIComponent(req.params[0]);
	let type = decodeURIComponent(req.params.type);
	let method = decodeURIComponent(req.params.method);
	if (!video && !type && !method) return res.json({
		error: 'Invalid Parameters!'
	});
	return await Switch(video, type, method, res);
});

app.listen(process.env.PORT, () => console.log("API Running!"));
