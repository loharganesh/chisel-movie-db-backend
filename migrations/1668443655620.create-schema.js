const { UUID } = require('sequelize');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Column Table
		await queryInterface.createTable('columns', {
			id: {
				type: Sequelize.DataTypes.UUID,
				defaultValue: Sequelize.DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			created_at: { type: Sequelize.DATE },
			updated_at: { type: Sequelize.DATE },
		});
	},
	down: async (queryInterface, _) => {
		await queryInterface.dropTable('columns');
	},
};
