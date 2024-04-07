const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },

  description: {
    type: String,
  },

  rate: {
    type: String,
  },

  category: {
    type: String,
  },

  url: {
    type: String,
  },

  tags: [
    {
      type: String,
    },
  ],

  createdAt: {
    type: Date,
  },

  updatedAt: {
    type: Date,
  },
});

module.exports = {
  productSchema,
};
