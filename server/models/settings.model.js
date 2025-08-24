const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
    {
        site_name : {
            type : String,
            default : "127.0.0.1"
        },
        category: {
            type: Array,
            default: []
        },
        
    },
    { timestamps: true }
);

const settings = mongoose.model("settings", settingsSchema);
module.exports = settings;
