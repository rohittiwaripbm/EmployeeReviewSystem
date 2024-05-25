import mongoose from "mongoose";

const dbConnectionString = process.env.ConnString

export const dbConnect = async () => {
    try {
        //Connect to the connection
        await mongoose.connect(dbConnectionString);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to Database', error.message);
        throw error;
    }
};