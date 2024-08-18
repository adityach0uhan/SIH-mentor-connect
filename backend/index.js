import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './database/db.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Home Route');
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await connectToDatabase();
    console.log(`Server is running on port ${port}`);
});
