import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const HorrorSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  date: {
    type: String,
  },
  html: {
    type: String,
    required: [true, "Please specify the HTML for the horror"],
  },
  links: {
    type: Array,
  },
  categories: {
    type: Array,
  },
});

export default mongoose.models.Horror || mongoose.model("Horror", HorrorSchema);
