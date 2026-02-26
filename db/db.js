import mongoose from "mongoose";

let conndectDB = async (url) => {
    await mongoose.connect(url)
    console.log("connected to Database!.");
}

export default conndectDB