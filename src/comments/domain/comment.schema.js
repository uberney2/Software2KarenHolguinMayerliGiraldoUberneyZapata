const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    productId: {
        type: Object,
    },

    userId: {
        type: Object,
    },

    content: {
        type: String,
    },

    createdAt: {
        type: Date,
    },

    updatedAt: {
        type: Date,
    },
});

module.exports = { commentSchema, };