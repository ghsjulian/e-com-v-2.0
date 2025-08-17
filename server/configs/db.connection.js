const mongoose = require("mongoose");
const DB = process.env.DB_NAME;
const URI = "mongodb://localhost:27017/";


const createConnecton = async()=>{
    try {
        return mongoose.connect(URI,{dbName : DB})
    } catch (error) {
        console.error(
            "\n[!] Error While Connecting Database : ",
            error.message
        );
    }
}

module.exports = createConnecton



