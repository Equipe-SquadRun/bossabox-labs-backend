'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('grades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.STRING
      },      
      evaluations_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'evaluations', key: 'id'
        }
      },
      people_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'people', key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('grades');
  }
};