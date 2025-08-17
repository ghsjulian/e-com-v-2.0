// Requiring Packages...
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const CLIENT = process.env.CLIENT_HOST;

// SET MIDDLESWARES FOR FRONTEND
app.use(express.json({ limit: "200MB" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: [CLIENT, "*"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
        maxAge: 86400
    })
);
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

/*----------------------------> <---------------------------------*/
// Requiring Database Config And create Connections
// Start the express server here...
const dbConnection = require("./configs/db.connection");
app.listen(PORT, () => {
    //  console.clear();
    console.log("\n--------------------------------------------------+");
    console.log(`\n[+] Server Running   -  http://${HOST}:${PORT}     |`);
    console.log(`\n[+] Database Connected Successfully               |`);
    console.log(`\n[+] Backend Developer - Ghs Julian                |`);
    console.log("\n--------------------------------------------------+\n\n");
});

dbConnection().then((res)=>{
    console.log(res)
})