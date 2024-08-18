import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};

module.exports = connectToDatabase;
