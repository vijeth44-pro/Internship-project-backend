import mongoose from "mongoose";
const mongo_url ='mongodb://localhost:27017/Diploma'
// install mongoes in terminal (npm install mongoose)
// connection string for connect server & database
// connection string + datbase name (path from mongodb /diploma) doesn't give space instead give  _ -

// for exception handling try catch use  try excute code ctach for error
// async is used for feature time,await async use madidre awit use madbodu
// 

const mongoConnection = async() =>{
  try {
    await mongoose.connect(mongo_url)
    console.log("database connected successfully")
  } catch (error) {
    console.log("error in connecting database")
  }
}
export default mongoConnection;