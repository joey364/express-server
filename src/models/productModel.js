const { Schema }, mongoose = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    default: "Uncategorized"
  }
});


module.exports = mongoose.model('Product', ProductSchema)
