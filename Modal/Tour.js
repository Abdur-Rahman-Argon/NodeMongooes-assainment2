const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name"],
      trim: true,
      unique: [true, " name must be unique"],
      minLength: [5, " Name must be 6 character"],
      maxLength: [50, "name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "price cannot be negative"],
    },
    image: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
