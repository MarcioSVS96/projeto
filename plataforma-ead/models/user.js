'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Um usuário pode ser instrutor de vários cursos
      User.hasMany(models.Course, {
        foreignKey: 'instructorId',
        as: 'courses'
      });

      // Um usuário pode ter vários certificados
      User.hasMany(models.Certificate, {
        foreignKey: 'userId',
        as: 'certificates'
      });

      // Um usuário pode ter vários registros de progresso
      User.hasMany(models.Progress, {
        foreignKey: 'userId',
        as: 'progresses'
      });

      // Um usuário pode fazer vários comentários
      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comments'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING // 'admin', 'instructor', 'student'
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
