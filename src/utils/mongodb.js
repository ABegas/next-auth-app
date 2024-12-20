import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is connected")
    } catch (error) {
        console.log("Error connecting to MomgoDB: ", error)
    }
};

export default connectMongoDB;