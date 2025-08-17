const mongoose = require("mongoose");
const DB = process.env.DB_NAME;
const URI = "mongodb://localhost:27017/";

const createConnection = async () => {
    try {
        mongoose.connect(URI, { dbName: DB }).then(() => {
            console.log("[+] Database Connected Successfully               |");
            console.log(
                "\n--------------------------------------------------+\n\n"
            );
        });
    } catch (error) {
        console.error(
            "\n[!] Error While Connecting Database : ",
            error.message
        );
    }
};

module.exports = createConnection;
