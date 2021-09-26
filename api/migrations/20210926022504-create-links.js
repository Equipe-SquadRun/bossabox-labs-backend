'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      people_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'people', key: 'id'
        }
      },
      companies_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'companies', key: 'id'
        }
      },
      conditions_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'conditions', key: 'id'
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
    await queryInterface.dropTable('links');
  }
};