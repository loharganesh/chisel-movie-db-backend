const Season = require('../models/Season');
const {
	ERR_MSG_INTERNAL_SERVER,
	OK,
	INTERNAL_SERVER_ERROR,
} = require('../utils/strings');

exports.getSeasons = async (req, res) => {
	try {
		const seasons = await Season.findAll({
			order: [['created_at', 'ASC']],
		});
		return res.status(OK).json({ data: seasons });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.postSeason = async (req, res) => {
	try {
		const payload = req.body;
		const season = await Season.create(payload);
		return res.status(OK).json({ data: season });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.deleteSeason = async (req, res) => {
	try {
		const { id } = req.params;
		const season = await Season.destroy({ where: { id } });
		return res.status(OK).json({ data: season });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.updateSeason = async (req, res) => {
	try {
		const { id } = req.params;
		const updates = req.body;

		const updatedSeries = await Season.update(updates, {
			where: { id },
			returning: true,
			plain: true,
		});
		return res.status(OK).json({ data: updatedSeries[1] });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.delete;
