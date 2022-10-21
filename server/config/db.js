import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    // const res = await mongoose.connect("mongodb://localhost:27017/crud-mern");
    const res = await mongoose.connect("mongodb+srv://admin:admin@cluster0.nzkymji.mongodb.net/?retryWrites=true&w=majority")
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
