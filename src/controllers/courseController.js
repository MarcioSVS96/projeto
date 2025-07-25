exports.createCurso = async (req, res) => {
    const { titulo, descricao } = req.body;
    try {
      const curso = await prisma.curso.create({
        data: {
          titulo,
          descricao,
          instrutorId: req.user.id,
        },
      });
      res.status(201).json({ message: 'Curso criado', curso });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar curso', details: err.message });
    }
  };
  
  exports.getCursos = async (req, res) => {
    try {
      const cursos = await prisma.curso.findMany({
        include: {
          instrutor: { select: { id: true, name: true, email: true } }
        },
      });
      res.json(cursos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar cursos', details: err.message });
    }
  };
  
  exports.getCursoById = async (req, res) => {
    const { id } = req.params;
    try {
      const curso = await prisma.curso.findUnique({
        where: { id: Number(id) },
        include: {
          modulos: true,
          instrutor: { select: { id: true, name: true } },
        },
      });
      if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
      res.json(curso);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar curso', details: err.message });
    }
  };
  