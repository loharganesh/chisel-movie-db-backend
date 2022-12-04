const { Sequelize } = require('sequelize');
const {
	MSG_DB_CONNECTED,
	MSG_DB_CONNECTION_ERROR,
} = require('../utils/strings');

const sequelize = new Sequelize(process.env.DATABASE_URL);

// Connect to Database
async function connect() {
	try {
		await sequelize.authenticate();
		console.log(MSG_DB_CONNECTED);
	} catch (error) {
		console.error(MSG_DB_CONNECTION_ERROR, error);
	}
}
connect();

module.exports = sequelize;
