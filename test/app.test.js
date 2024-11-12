const request = require('supertest');
const { app, server } = require('../index');  // Import app and server

describe('GET /', () => {
  it('should return Hello, world!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});

afterAll(() => {
  server.close();  // Close the server after the tests
});
