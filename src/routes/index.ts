import { Application, Request, Response } from 'express';
import { getIndex } from '../controllers/index';

export function setRoutes(app: Application) {
    app.get('/', (req: Request, res: Response) => {
        getIndex(req, res);
    });
}