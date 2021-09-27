'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // users.belongsTo(models.users_roles, {
      //   foreignKey: 'users_id'
      // })
    }
  };
  users.init({
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {          
          // args: true,
          msg: 'O E-mail digitado é inválido'
        }
      }
    },
    password: {
      type: DataTypes.STRING,      
      validate: {                
        notEmpty: {
          msg: "A senha não pode ser vazia"
        },
        len: {
          args: [8, 70],
          msg: "A senha deve ter entre 8 e 70 caracteres"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'users',
    paranoid: true
  });
  return users;
};