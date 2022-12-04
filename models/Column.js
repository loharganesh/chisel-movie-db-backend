const { DataTypes } = require('sequelize');
const sequelize = require('../database/init');

// Model
const Column = sequelize.define(
	'Column',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		underscored: true,
	}
);

module.exports = Column;
