const prisma = require('../config/prisma');

exports.createModulo = async (req, res) => {
  const { titulo, videoUrl, arquivos, cursoId } = req.body;
  try {
    // Verifica se o curso existe e pertence ao instrutor
    const curso = await prisma.curso.findUnique({
      where: { id: Number(cursoId) },
    });
    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    if (curso.instrutorId !== req.user.id) {
      return res.status(403).json({ error: 'Você não pode adicionar módulos a esse curso' });
    }

    const modulo = await prisma.modulo.create({
      data: {
        titulo,
        videoUrl,
        arquivos,
        cursoId: Number(cursoId),
      },
    });
    res.status(201).json({ message: 'Módulo criado', modulo });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar módulo', details: err.message });
  }
};

exports.getModulosByCurso = async (req, res) => {
  const { cursoId } = req.params;
  try {
    const modulos = await prisma.modulo.findMany({
      where: { cursoId: Number(cursoId) },
    });
    res.json(modulos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar módulos', details: err.message });
  }
};
