const request = require('supertest');
const app = require('./index');

describe('Express API Tests', () => {
  describe('GET /health', () => {
    it('should return 200 and healthy status', async () => {
      const res = await request(app)
        .get('/health')
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'healthy');
      expect(res.body).toHaveProperty('message');
    });
  });

  describe('GET /api', () => {
    it('should return 200 and welcome message', async () => {
      const res = await request(app)
        .get('/api')
        .expect(200);
      
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toContain('Welcome');
    });
  });

  describe('POST /api/echo', () => {
    it('should echo the provided message', async () => {
      const res = await request(app)
        .post('/api/echo')
        .send({ message: 'Hello World' })
        .expect(200);
      
      expect(res.body).toHaveProperty('echo', 'Hello World');
    });

    it('should return 400 if message is missing', async () => {
      const res = await request(app)
        .post('/api/echo')
        .send({})
        .expect(400);
      
      expect(res.body).toHaveProperty('error');
    });
  });
});