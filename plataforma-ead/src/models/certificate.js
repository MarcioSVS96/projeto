'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    static associate(models) {
      Certificate.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      Certificate.belongsTo(models.Course, {
        foreignKey: 'courseId',
        as: 'course'
      });
    }
  }
  Certificate.init({
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    issuedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Certificate',
  });
  return Certificate;
};
