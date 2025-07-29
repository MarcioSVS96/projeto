'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Um curso pertence a um instrutor (usuário)
      Course.belongsTo(models.User, {
        as: 'instructor',
        foreignKey: 'instructorId'
      });
    
      // Um curso possui vários módulos
      Course.hasMany(models.Module, {
        foreignKey: 'courseId',
        as: 'modules',
        onDelete: 'CASCADE'
      });
    
      // Um curso pode gerar vários certificados
      Course.hasMany(models.Certificate, {
        foreignKey: 'courseId',
        as: 'certificates',
        onDelete: 'CASCADE'
      });
    
      // Um curso pode ter muitos registros de progresso de alunos
      Course.hasMany(models.Progress, {
        foreignKey: 'courseId',
        as: 'progresses',
        onDelete: 'CASCADE'
      });
    }
    
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    instructorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};