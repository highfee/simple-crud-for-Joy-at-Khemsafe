import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  quantity: {
    type: String,
    default: "0",
  },
  price: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
