import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();

// essential middleware
app.use(express.json());

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

// ROUTINGS
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// ERROR MIDLEWARE
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});