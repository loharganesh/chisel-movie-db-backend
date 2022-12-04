const { DataTypes } = require('sequelize');
const sequelize = require('../database/init');
const Episode = require('./Episode');

const Season = sequelize.define(
	'Season',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: { type: DataTypes.STRING, allowNull: false },
		series: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	},
	{
		underscored: true,
	}
);

// Association
Season.hasMany(Episode, {
	as: 'episodes',
	foreignKey: { name: 'season', allowNull: false },
	onDelete: 'cascade',
});

module.exports = Season;
