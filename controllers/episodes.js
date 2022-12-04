const Episode = require('../models/Episode');
const {
	ERR_MSG_INTERNAL_SERVER,
	INTERNAL_SERVER_ERROR,
	OK,
} = require('../utils/strings');

exports.getEpisodes = async (req, res) => {
	try {
		const episodes = await Episode.findAll({
			order: [['created_at', 'ASC']],
		});
		return res.status(200).json({ data: episodes });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.postEpisodes = async (req, res) => {
	try {
		const payload = req.body;
		console.log(payload);
		const episode = await Episode.create(payload);
		return res.status(200).json({ data: episode });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.deleteEpisode = async (req, res) => {
	try {
		const { id } = req.params;
		const episode = await Episode.destroy({ where: { id } });
		return res.status(200).json({ data: episode });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.updateEpisode = async (req, res) => {
	try {
		const { id } = req.params;
		const updates = req.body;

		const updatedEpisode = await Episode.update(updates, {
			where: { id },
			returning: true,
			plain: true,
		});
		return res.status(OK).json({ data: updatedEpisode[1] });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};
