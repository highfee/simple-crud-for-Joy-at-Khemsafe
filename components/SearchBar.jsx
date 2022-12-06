import axios from "axios";
import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../context/searchContext";
import { ProductContext } from "../context/ProductsContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useContext(SearchContext);
  const { dispatch2 } = useContext(ProductContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NEW_SEARCH", payload: { text: searchTerm } });
    const res = await axios.get(
      `https://khemsafe.vercel.app/api/products/?search=${searchTerm}`
    );
    dispatch2({ type: "SEARCHED_PRODUCTS", payload: { products: res.data } });
  };
  return (
    <div className="mt-2 mr-5">
      <form className="flex items-center gap-5" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search...."
          className="border-2 border-solid p-2 outline-none focus:border-slate-800 rounded-xl w-full"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <FaSearch
          size={18}
          fill="#333"
          className="cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default SearchBar;
