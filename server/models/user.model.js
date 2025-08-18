const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone : {
            type : String,
            required : true
        },
        password : {
          type : String ,
          required:true
        },
        avatar: {
            type: String,
            default: ""
        },
        verification : {
            type : Boolean,
            default : false
        },
        role : {
            type : String,
            default : "USER"
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
