import { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/router";
import Head from "next/head";
import EditProgram from "../components/EditProduct";
import axios from "axios";

const Product = ({ data }) => {
  const router = useRouter();
  const [product, setProduct] = useState(data);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>{product?.name}</title>
        <meta name="description" content="madame joy simple app" />
      </Head>
      <div className="flex items-center gap-4">
        <FaArrowLeft
          fillOpacity={0.7}
          size={18}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
        <header className="text-2xl">{product?.name}</header>
      </div>
      <div className="w-[99%] h-[200px] relative max-w-[600px] shadow-xl mx-auto mt-3 p-3">
        <div>
          <h2 className="text-xl ">Description:</h2>
          <p>{product?.description}</p>
          <h2 className="text-xl mt-3">
            Price:{" "}
            <CurrencyFormat
              value={product?.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"N"}
              className="text-base"
            />
          </h2>
          <h2 className="text-xl">
            Quantity(remaining):{" "}
            <span className="text-base">{product?.quantity}</span>
          </h2>
        </div>
        <button
          className="absolute right-2 bottom-2 border-2 border-solid px-3 py-1"
          onClick={() => setShowModal(true)}
        >
          Update
        </button>
      </div>
      <EditProgram
        setShowModal={setShowModal}
        showModal={showModal}
        product={product}
        setProduct={setProduct}
      />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await axios.get(
    `https://khemsafe.vercel.app/api/products/${ctx.params.id}`
  );
  // console.log(res.data);
  return {
    props: {
      data: res.data,
    },
  };
};

export default Product;
