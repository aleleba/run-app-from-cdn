import request from 'supertest';
import express from 'express';
import { setRoutes } from '../src/routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
setRoutes(app);

describe('GET /', () => {
  it('should redirect to CDN URL', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(302);
    expect(response.header.location).toBe(process.env.CDN_URL);
  });

  it('should return 500 if CDN URL is not configured', async () => {
    process.env.CDN_URL = '';
    const response = await request(app).get('/');
    expect(response.status).toBe(500);
    expect(response.text).toBe('CDN URL not configured');
  });
});