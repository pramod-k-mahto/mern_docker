import mongoose from "mongoose";
const conn = async () => {
  try {
    console.log(process.env.DATABASE_URL)
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database is Connected Successfully ");
  } catch (error) {
    console.log(error);
  }
};


export default conn;
