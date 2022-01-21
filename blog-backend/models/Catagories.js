import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const leoCatagories = mongoose.model("blogCatagories", CategorySchema);

export default leoCatagories;
