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

    rate: {
        type: Number,
    },

    createdAt: {
        type: Date,
    },

    updatedAt: {
        type: Date,
    },
});

module.exports = { commentSchema, };