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
// Define API Endpoints
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/user", userRoutes);
/*----------------------------> <---------------------------------*/
// Requiring Database Config And create Connections
// Start the express server here...
const createConn = require("./configs/db.connection");

app.listen(PORT, async () => {
    console.clear();
    await createConn();
    console.log("\n--------------------------------------------------+");
    console.log(`\n[+] Server Running   -  http://${HOST}:${PORT}     |`);
    console.log(`\n[+] Backend Developer - Ghs Julian                |\n`);
});
