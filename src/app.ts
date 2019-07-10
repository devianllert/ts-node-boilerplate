import express, { Application } from 'express';
import dotenv from 'dotenv';

import connectDB from './db';
import router from './api/router';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV);

const createServer = async (): Promise<void> => {
  await connectDB();
  await app.listen(app.get('port'));

  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
};

createServer();
