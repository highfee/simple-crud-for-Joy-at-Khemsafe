import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { FaPlus } from "react-icons/fa";
import { AddProduct, AllProducts, SearchBar } from "../components";
import axios from "axios";
import { ProductContext } from "../context/ProductsContext";
import dbConnect from "../db";
import Product from "../models/productModel";

export default function Home({ data }) {
  const [showModal, setShowModal] = useState(false);
  const { dispatch2 } = useContext(ProductContext);

  console.log(data);
  useEffect(() => {
    dispatch2({ type: "ALL_PRODUCTS", payload: { products: data } });
  }, [dispatch2, data]);

  if (data.length < 1) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <Head>
        <title>Khemsafe</title>
        <meta name="description" content="madame joy simple app" />
      </Head>
      <SearchBar />
      <div className=" mt-3">
        <AllProducts />
      </div>
      <div
        className="h-[40px w-[40px grid p-4 place-items-center bg-white rounded-full shadow-xl shadow-gray-300 fixed right-5 bottom-5 hover:scale-105 cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <FaPlus size={24} fillOpacity="0.7" />
      </div>
      <AddProduct showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export const getServerSideProps = async () => {
  await dbConnect();
  const res = await Product.find();
  const products = res.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });
  return {
    props: {
      data: products,
    },
  };
};
