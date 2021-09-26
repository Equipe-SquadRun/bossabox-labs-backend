'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      links.hasMany(models.people, {
        foreignKey: 'people_id'
      })
      links.hasMany(models.companies, {
        foreignKey: 'companies_id'
      })
      links.hasMany(models.conditions, {
        foreignKey: 'conditions_id'
      })
    }
  };
  links.init({
    description: {
      type: DataTypes.STRING,
      validate: {
        functionValidator: function(value){
          if(value.length < 3){
            throw new Error('O campo link deve conter no mínimo 3 caracteres')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'links',
    paranoid: true
  });
  return links;
};