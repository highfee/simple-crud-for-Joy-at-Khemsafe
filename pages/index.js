import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { FaPlus } from "react-icons/fa";
import { AddProduct, AllProducts, SearchBar } from "../components";
// import AddProduct from "../components/AddProduct";
// import AllProducts from "../components/AllProducts";
// import SearchBar from "../components/SearchBar";

import axios from "axios";
import { ProductContext } from "../context/ProductsContext";

export default function Home({ data }) {
  const [showModal, setShowModal] = useState(false);
  const { dispatch2 } = useContext(ProductContext);
  console.log(data.data);
  useEffect(() => {
    setTimeout(
      dispatch2({ type: "ALL_PRODUCTS", payload: { products: data } }),
      3000
    );
  }, [dispatch2, data]);
  return (
    <div>
      <Head>
        <title>JOY</title>
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
  const res = await axios.get("https://khemsafe.vercel.app/api/products");

  return {
    props: {
      data: res.data,
    },
  };
};
