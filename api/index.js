import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// coonect to mongoDB database
const conectDB = async (urlToDB) => {
    try {
        await mongoose.connect(urlToDB);
        console.log("Db connection Successful")
    } catch (error) {
        console.log(error)
    }
};

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}...`);
    conectDB(process.env.MONGO_DB)
});