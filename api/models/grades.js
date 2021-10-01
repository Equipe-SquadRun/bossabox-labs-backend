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
      grades.belongsTo(models.evaluations, {
        foreignKey: 'evaluations_id'
      })
      grades.belongsTo(models.people, {
        foreignKey: 'people_id'
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