// Constants
const Column = require('../models/Column');

const {
	ERR_MSG_INTERNAL_SERVER,
	INTERNAL_SERVER_ERROR,
	CREATED,
	OK,
} = require('../utils/strings');

exports.getColumns = async (req, res) => {
	try {
		const columns = await Column.findAll({
			order: [['created_at', 'ASC']],
		});
		return res.status(OK).json({ data: columns });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.postColumn = async (req, res) => {
	const payload = req.body;

	try {
		const createdColumn = await Column.create(payload);
		return res.status(CREATED).json({ data: createdColumn });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.deleteColumn = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedColumn = await Column.destroy({
			where: { id },
		});
		return res.status(OK).json({ data: deletedColumn });
	} catch (e) {
		console.log(e);
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};

exports.updateColumn = async (req, res) => {
	try {
		const { id } = req.params;
		const updates = req.body;

		const updatedColumn = await Column.update(updates, {
			where: { id },
			returning: true,
			plain: true,
		});
		return res.status(OK).json({ data: updatedColumn[1] });
	} catch (e) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.json({ error: ERR_MSG_INTERNAL_SERVER });
	}
};
