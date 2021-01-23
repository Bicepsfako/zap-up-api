const fs = require('fs');
var Jimp = require('jimp');
var moment = require('moment');
moment.locale('tr');

const Render = async(video, res) => {
        if (!video) return res.json({ error: 'Wtf?' });
        let now = moment();
		let minute = now.get('minute');
		Jimp.read(`https://wallpaperaccess.com/full/854063.jpg`).then(function (delimg) {
			Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(async function (font) {
				await delimg.blur(50)
				await delimg.resize(320, 320)
				await delimg.HORIZONTAL_ALIGN_CENTER;
				//80 Sağa / //20 Yukarı
				// 15 sağa / // 80 yukarı
				await delimg.print(font, 80, 20, moment().format('LT'), 80)
				await delimg.print(font, 15, 80, moment().format('l'), 40)
				await delimg.write(`./${minute}.jpg`);
				await res.sendFile(`./${minute}.jpg`);
				fs.unlinkSync(`./${minute}.jpg`);
			});
		});
};


module.exports = {
   Render
};
