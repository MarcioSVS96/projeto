const sequelize = require('../config/database');
const User = require('./User');
const Course = require('./course');

// Define as associações entre os modelos
// Um Usuário (instrutor) pode ter muitos Cursos
User.hasMany(Course, {
  foreignKey: 'instructor_id',
  as: 'courses',
});

// Um Curso pertence a um Usuário (instrutor)
Course.belongsTo(User, {
  foreignKey: 'instructor_id',
  as: 'instructor',
});

module.exports = { sequelize, User, Course };

