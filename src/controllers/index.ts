import { Request, Response } from 'express';

export const getIndex = async (req: Request, res: Response): Promise<void> => {
  try {
    const cdnUrl = process.env.CDN_URL;
    if (!cdnUrl) {
      res.status(500).send('CDN URL not configured');
      return;
    }
    res.redirect(cdnUrl);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};