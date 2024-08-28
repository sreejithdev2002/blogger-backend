const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    myBlogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "blog",
        },
    ],
});

module.exports = new mongoose.model("user", userSchema);