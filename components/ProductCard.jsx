import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    setDeleting(true);
    const res = await axios.delete(
      `https://khemsafe.vercel.app/api/products/${product._id}`
    );
    if (res) {
      toast.success(`${product.name} deleted successfully`);
      location.reload();
    }
  };
  return (
    <div className="p-3 bg-white rounded-md shadow-sm shadow-gray-300 mb-4 flex relative">
      <Link href={`/${product._id}`} passHref>
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
      </Link>
      {deleteProduct ? (
        <div className="absolute flex gap-2 bottom-3 right-3">
          <button
            className="border-2 border-solid px-3 py-1 bg-lime-600 text-gray-300"
            onClick={handleDelete}
          >
            {deleting ? "Deleting" : "Delete"}
          </button>
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
  );
};

export default ProductCard;
