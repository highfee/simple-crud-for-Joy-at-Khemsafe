import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = ({ showModal, setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
  });
  const handleChange = (e) => {
    setInputs((prevs) => ({ ...prevs, [e.target.name]: e.target.value }));
  };
  const handleCancel = () => {
    setShowModal(false);
    setInputs({
      name: "",
      price: "",
      quantity: "",
      storage: "",
      memory: "",
    });
  };
  const handleAdd = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://khemsafe.vercel.app/api/products",
        inputs
      );
      if (res.data.message == "already exist") {
        return toast.error("Product already exist");
      }
      if (res) {
        setLoading(false);
        handleCancel();
        toast.success("Item added");
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="w-[90%] max-w-[600px] h-[500px] bg-white mx-auto rounded-2xl shadow-xl p-3 fixed top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]"
      style={{ display: `${showModal == true ? "block" : "none"}` }}
    >
      <h2 className="text-2xl text-gray-600 mb-3">Add new product</h2>
      <div className="flex gap-3 mb-3 items-center">
        <label>Name</label>
        <input
          type="text"
          className="border border-solid w-full p-2"
          name="name"
          onChange={handleChange}
          value={inputs.name}
        />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-1 gap-2 mb-3 items-center">
          <label>Price</label>
          <input
            type="tel"
            className="border border-solid w-full p-2"
            name="price"
            onChange={handleChange}
            value={inputs.price}
          />
        </div>
        <div className="flex flex-1 gap-2 mb-3 items-center">
          <label>Quantity</label>
          <input
            type="number"
            className="border border-solid w-full p-2"
            name="quantity"
            onChange={handleChange}
            value={inputs.quantity}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1 gap-2 mb-3 items-center">
          <textarea
            rows="7"
            placeholder="Description"
            name="description"
            className="border border-solid w-full p-2 resize-none"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="flex gap-3 absolute right-3 bottom-3">
        <button
          className="border border-solid px-3 py-1 bg-slate-600 text-white"
          onClick={handleAdd}
        >
          {loading ? "Adding..." : "Add"}
        </button>
        <button
          className="border border-solid px-3 py-1 bg-lime-600 text-gray-300"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
