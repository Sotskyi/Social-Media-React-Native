const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please add name"],
  },
  message: {
    type: String,
    required: [true, "Please add some text"],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ListedB-app", ActivitySchema);
