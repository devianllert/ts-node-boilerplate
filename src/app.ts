import express, { Application } from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db';
import router from './api/router';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.set('port', process.env.PORT || 3000);

app.listen(
  app.get('port'),
  (): void => {
    connectDB();

    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
  },
);
