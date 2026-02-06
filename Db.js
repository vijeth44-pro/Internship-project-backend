import mongoose from "mongoose";

const mongo_Url = 'mongodb://localhost:27017/lord';

const mongoConnection = async() => {
  try {
    await mongoose.connect(mongo_Url)
    console.log("Database connected successfully")
  } catch (error) {
    console.log("Database connection failed");
  }
}

export default mongoConnection;