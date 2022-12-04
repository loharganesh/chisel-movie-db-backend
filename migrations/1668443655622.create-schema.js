const { UUID } = require('sequelize');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Series Table
		await queryInterface.createTable('series', {
			id: {
				type: UUID,
				require: true,
				allowNull: false,
				primaryKey: true,
			},
			name: Sequelize.DataTypes.STRING,
			created_at: { type: Sequelize.DATE },
			updated_at: { type: Sequelize.DATE },
		});

		// Seasons Table
		await queryInterface.createTable('seasons', {
			id: {
				type: UUID,
				allowNull: false,
				primaryKey: true,
			},
			name: { type: Sequelize.DataTypes.STRING, allowNull: false },
			series: {
				type: UUID,
				allowNull: false,
				references: {
					model: 'series',
					key: 'id',
				},
			},
			created_at: { type: Sequelize.DATE },
			updated_at: { type: Sequelize.DATE },
		});

		// Episodes Table
		await queryInterface.createTable('episodes', {
			id: {
				type: UUID,
				require: true,
				allowNull: false,
				primaryKey: true,
			},
			name: { type: Sequelize.DataTypes.STRING, allowNull: false },
			series: {
				type: UUID,
				allowNull: false,
				references: {
					model: 'series',
					key: 'id',
				},
			},
			season: {
				type: UUID,
				allowNull: false,
				references: {
					model: 'seasons',
					key: 'id',
				},
			},
			ratings_factors: {
				type: Sequelize.DataTypes.JSON,
				defaultValue: { storytelling: 0, acting: 0, direction: 0 },
			},
			created_at: { type: Sequelize.DATE },
			updated_at: { type: Sequelize.DATE },
		});
	},
	down: async (queryInterface, _) => {
		await queryInterface.dropTable('episodes');
		await queryInterface.dropTable('seasons');
		await queryInterface.dropTable('series');
	},
};
