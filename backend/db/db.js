const mongoose = require('mongoose');



const db = async () => {
    try {

        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MANGO_URL)
        console.log("DATABASE CONNECTD");
        
    } catch (error) {
        console.log("Database connection error" + error);
    }
}


module.exports = db