// Models
const Episode = require('../models/Episode');
const Season = require('../models/Season');
const Series = require('../models/Series');

// Constants
const {
	ERR_MSG_INTERNAL_SERVER,
	INTERNAL_SERVER_ERROR,
	CREATED,
	OK,
} = require('../utils/strings');

exports.getSeries = async (req, res) => {
	try {
		const series = await Series.findAll({ order: [['created_at', 'ASC']] });
		return res.status(OK).json({ data: series });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.postSeries = async (req, res) => {
	const payload = req.body;

	try {
		const series = await Series.create(payload);
		return res.status(CREATED).json({ data: series });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.deleteSeries = async (req, res) => {
	try {
		const { id } = req.params;
		const series = await Series.destroy({
			where: { id },
			include: [
				{
					model: Season,
					as: 'seasons',
					include: [{ model: Episode, as: 'episodes' }],
				},
			],
		});
		return res.status(OK).json({ data: series });
	} catch (e) {
		console.log(e);
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.updateSeries = async (req, res) => {
	try {
		const { id } = req.params;
		const updates = req.body;

		const updatedSeries = await Series.update(updates, {
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
