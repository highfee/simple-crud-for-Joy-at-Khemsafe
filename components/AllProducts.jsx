import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductsContext";

import ProductCard from "../components/ProductCard";
const AllProducts = () => {
  const { products } = useContext(ProductContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
    console.log(data);
  }, [data, products]);

  if (true) {
    return <h1>Nothing to display yet</h1>;
  }

  return (
    <div>
      <header className="text-gray-700 text-2xl font-bold">All Items</header>
      <div className="m-2 mt-3">
        {data.length < 1 ? (
          <p className="text-xl">No product.....</p>
        ) : (
          data?.map((item) => <ProductCard key={item._id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default AllProducts;
