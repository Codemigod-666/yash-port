import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

export default async function connectToDB() {
    try {
        await mongoose.connect(uri);
        console.log("Database Connected Successfully !");
    } catch (error) {
        console.log("Error: ",error);
    }
}