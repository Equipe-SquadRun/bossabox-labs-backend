'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_roles.belongsTo(models.users, {
        foreignKey: 'users_id'
      })
      users_roles.belongsTo(models.roles, {
        foreignKey: 'roles_id'
      })
    }
  };
  users_roles.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_roles',
  });
  return users_roles;
};