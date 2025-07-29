module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    moduleId: DataTypes.INTEGER
  });

  Lesson.associate = (models) => {
    Lesson.belongsTo(models.Module, { foreignKey: 'moduleId', as: 'module' });
  };

  return Lesson;
};
