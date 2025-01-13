import request from 'supertest';
import dotenv from 'dotenv';
import app from '../src/app';

dotenv.config();

describe('Proxy Middleware', () => {
  it('should proxy to CDN URL', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

});
