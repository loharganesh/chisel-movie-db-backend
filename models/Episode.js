const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/init');

const Episode = sequelize.define(
	'Episode',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: { type: DataTypes.STRING, allowNull: false },
		season: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		series: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		ratings_factors: {
			type: DataTypes.JSON,
			defaultValue: {},
		},
	},
	{
		underscored: true,
	}
);

module.exports = Episode;
