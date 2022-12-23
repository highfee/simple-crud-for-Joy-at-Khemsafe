import Link from "next/link";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [deleteProduct, setDeleteProduct] = useState(false);
  return (
    <Link href={`/${product._id}`} passHref>
      <div className="p-3 bg-white rounded-md shadow-sm shadow-gray-300 mb-4 flex relative">
        <div>
          <h2>{product.name}</h2>
          <p>
            Price:{" "}
            <CurrencyFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"N"}
              className="text-base"
            />
          </p>
          <p>
            Quantity remaining: <span>{product.quantity}</span>
          </p>
        </div>
        {deleteProduct ? (
          <div className="absolute flex gap-2 bottom-3 right-3">
            <button className="border-2 border-solid px-3 py-1">Ok</button>
            <button
              onClick={(prev) => setDeleteProduct(false)}
              className="border-2 border-solid px-3 py-1"
            >
              Cancel
            </button>
          </div>
        ) : (
          <FaTrashAlt
            className="absolute bottom-3 right-3 cursor-pointer"
            onClick={(prev) => setDeleteProduct(true)}
          />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
