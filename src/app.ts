import app from './server';
import connectDB from './db';

const createServer = async (): Promise<void> => {
  await connectDB();
  await app.listen(app.get('port'));

  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
};

createServer();
