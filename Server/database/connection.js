import mongoose from 'mongoose';

const connection = async () => {
  const url = "mongodb://127.0.0.1:27017/Model_Listing";

  try {
    await mongoose.connect(url);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connection;
