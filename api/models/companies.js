'use strict';
const {
  Model
} = require('sequelize');
const subjects = require('./subjects');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      companies.belongsTo(models.users, {
        foreignKey: 'users_id'
      })      
    }
  };
  companies.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        functionValidator: function(value){
          if(value.length < 3){
            throw new Error('O campo nome deve conter no mínimo 3 caracteres')
          }
        }
      }
    },
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'O e-mail digitado não é válido'
        }
      }
    },
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companies',
    paranoid: true
  });
  return companies;
};