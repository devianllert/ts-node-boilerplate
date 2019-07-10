import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error(error.message);

    // Exit process with failure
    process.exit(1);
  }
};

mongoose.connection.on('connected', () => console.log('Mongo DB connected'));
mongoose.connection.on('disconnected', connectDB);
mongoose.connection.on('reconnected', () => console.log('Mongo DB reconnected'));
mongoose.connection.on('error', console.log);

export default connectDB;
