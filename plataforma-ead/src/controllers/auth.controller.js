const AuthService = require('../services/auth.service');

module.exports = {
  async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const token = await AuthService.login(req.body);
      return res.json({ token });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
};
