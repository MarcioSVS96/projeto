const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async register({ name, email, password, role }) {
    const existing = await User.findOne({ where: { email } });
    if (existing) throw new Error('E-mail já cadastrado');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    return user;
  },

  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Credenciais inválidas');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Credenciais inválidas');

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'segredo123',
      { expiresIn: '1d' }
    );

    return token;
  }
};
