import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log("error connecting DB",error);
        process.exit(1);
    }
}

export default connectDB;