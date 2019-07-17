import express, { Application } from 'express';
import dotenv from 'dotenv';

import router from './api/router';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV);

export default app;
