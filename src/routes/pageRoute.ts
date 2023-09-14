import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Selamat Datang');
});

router.get('/about', (req: Request, res: Response) => {
  res.send('Tentang Saya');
});

router.get('/contact', (req: Request, res: Response) => {
  res.send('Contact Saya');
});

export default router;
