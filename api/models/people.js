'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      people.belongsTo(models.links, {
        foreignKey: 'people_id'
      })
      people.belongsTo(models.subjects, {
        foreignKey: 'people_id'
      })
      // people.hasOne(models.users, {
      //   foreignKey: 'users_id'
      // })
    }
  };
  people.init({
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
    nickname: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'O e-mail digitado é inválido'
        }
      }
    },
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'people',
    paranoid: true
  });
  return people;
};