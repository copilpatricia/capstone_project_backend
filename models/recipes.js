import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  ingredients: {
    type: Array,
    default: [],
  },

  instructions: {
    type: Array,
    default: []
  }
});

export default mongoose.model("Recipes", recipesSchema);
