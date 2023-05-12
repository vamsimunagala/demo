require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            // The following are to prevent warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true,
       
        });

        console.log(`MongoDB connected successfully `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;