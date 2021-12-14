var mongoose = require('mongoose');
var db = require("../db/dbconfig");

const connectDB = async () => {
    try {
        const con = await mongoose.connect(`${db.MONGO_URL}${db.DATABASE_NAME}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;