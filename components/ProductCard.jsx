import Link from "next/link";
import CurrencyFormat from "react-currency-format";
import { FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
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
        <FaTrashAlt className="absolute top-3 right-3" />
      </div>
    </Link>
  );
};

export default ProductCard;
