import mongoose from "mongoose";
const ingredient = new mongoose.Schema({
  ingredient: {
    type: String,
  },
});
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
    type: String,
  },

  instructions: String,
});

export default mongoose.model("Recipes", recipesSchema);
