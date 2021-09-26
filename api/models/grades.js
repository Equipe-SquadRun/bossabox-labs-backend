'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class grades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      grades.hasOne(models.evaluations, {
        foreignKey: 'evaluations_id'
      })
    }
  };
  grades.init({
    score: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'grades',
  });
  return grades;
};