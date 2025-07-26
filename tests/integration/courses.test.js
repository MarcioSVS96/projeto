const request = require('supertest');
const app = require('../../src/app'); // Sua instância do Express
const db = require('../../src/config/database'); // Sua conexão com o DB para limpar antes/depois

describe('POST /api/courses', () => {
  let instructorToken;

  beforeAll(async () => {
    // 1. Criar um usuário instrutor no banco
    // 2. Fazer login para obter um token
    // instructorToken = '...';
  });

  it('should create a new course when user is an instructor', async () => {
    const res = await request(app)
      .post('/api/courses')
      .set('Authorization', `Bearer ${instructorToken}`)
      .send({
        title: 'Curso de Node.js para Iniciantes',
        description: 'Um curso completo sobre Node.js.'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Curso de Node.js para Iniciantes');
  });

  // ... outros testes (ex: falhar se não for instrutor, falhar se faltar o título, etc.)
});

