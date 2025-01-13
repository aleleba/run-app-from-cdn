import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import type { Request, Response } from 'express';
import { NextFunction } from 'http-proxy-middleware/dist/types';
import { ClientRequest } from 'http';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const cdnUrl = process.env.CDN_URL;

// Configuración del middleware de proxy
const proxyOptions = {
  target: cdnUrl, // URL del CDN
  changeOrigin: true, // Cambiar el origen para evitar problemas de CORS,
  pathRewrite: (path: string) => path.replace("/", ""),
  onProxyReq: (proxyReq: ClientRequest, req: Request, res: Response) => {
    console.log(`Proxying request: ${req.url}`);
  },
  onError: (err: any, req: Request, res: Response) => {
    console.error('Proxy error:', err);
    if (!cdnUrl) {
      res.status(500).send('CDN URL not configured');
      throw new Error('CDN URL not configured');
    }
  },
};

// Crear el middleware proxy
const proxyMiddleware = createProxyMiddleware(proxyOptions);

// Middlewares para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para validar si cdnUrl está configurado
const validateCdnUrl = (req: Request, res: Response, next: NextFunction) => {
  if (!cdnUrl) {
    res.status(500).send('CDN URL not configured');
    throw new Error('CDN URL not configured');
  }
  next();
};

// Usar el middleware de validación antes del proxy
app.use(validateCdnUrl);
// Configurar el middleware proxy
app.use('/', proxyMiddleware);

// DO NOT DO app.listen() unless we're testing this directly
if (require.main === module) {
// Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

// Instead do export the app:
export default app;
