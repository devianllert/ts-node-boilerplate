import { Router } from 'express';

import userRouter from './resources/user';

const router: Router = Router();

router.use('/users', userRouter);

export default router;
