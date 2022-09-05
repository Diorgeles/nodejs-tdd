import { Router, Request, Response } from 'express';
import { sum } from '../service/functions';

const route = Router();

route.get('/', (_req: Request, res: Response) => {
  res.json({ message: `Hello world: ${sum(1, 2)}` });
});

export default route;
