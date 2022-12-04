const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/init');
const Episode = require('./Episode');
const Season = require('./Season');

// Model
const Series = sequelize.define(
	'Series',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: DataTypes.STRING,
	},
	{
		underscored: true,
	}
);

// Association
Series.hasMany(Season, {
	as: 'seasons',
	foreignKey: { name: 'series' },
	onDelete: 'cascade',
});
Series.hasMany(Episode, {
	as: 'episodes',
	foreignKey: { name: 'series' },
	onDelete: 'cascade',
});

module.exports = Series;
