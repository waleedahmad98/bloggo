import mongoose from 'mongoose';
import { DATABASE_NAME, MONGO_URL } from './dbconfig.js';

const connectDB = async () => {
    try {
        const con = await mongoose.connect(`${MONGO_URL}${DATABASE_NAME}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;