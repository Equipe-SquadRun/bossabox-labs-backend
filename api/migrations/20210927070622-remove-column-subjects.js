'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('subjects', 'people_id');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('subjects', 'people_id', {      
        allowNull: true,        
        type: Sequelize.INTEGER
    });;
  }
};