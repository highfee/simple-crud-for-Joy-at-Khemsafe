import dbConnect from "../../../db";
import Product from "../../../models/productModel";

export default async function handler(req, res) {
  await dbConnect();
  const {
    body,
    query: { search },
  } = req;
  console.log(search);

  if (req.method === "GET") {
    if (search) {
      let student = await Product.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      });
      return res.json(student);
    }
    const products = await Product.find();
    res.json(products);
  }

  if (req.method === "POST") {
    let product = new Product(body);
    await product.save();
    res.json(product);
  }
}
