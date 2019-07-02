import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);

    // Exit process with failure
    process.exit(1);
  }
};

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connectDB);

export default connectDB;
