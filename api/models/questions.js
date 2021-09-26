'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      questions.hasOne(models.evaluations, {
        foreignKey: 'evaluations_id'
      })
    }
  };
  questions.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'questions',
    paranoid: true
  });
  return questions;
};