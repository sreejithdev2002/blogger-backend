const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

module.exports = new mongoose.model("blog", blogSchema);