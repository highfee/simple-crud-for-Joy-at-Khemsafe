import dbConnect from "../../../db";
import Product from "../../../models/productModel";

export default async function handler(req, res) {
  // await dbConnect();

  const {
    body,
    query: { id },
  } = req;

  if (req.method === "GET") {
    const product = await Product.findById(id);
    res.json(product);
    // res.send(pro
  }
  if (req.method === "PUT") {
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    res.json(product);
  }
  if (req.method === "DELETE") {
    const product = await Product.findByIdAndDelete(id);
    res.json(product);
  }
}
