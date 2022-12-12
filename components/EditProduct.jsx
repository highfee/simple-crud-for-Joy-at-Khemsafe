import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const EditProgram = ({ showModal, setShowModal, product, setProduct }) => {
  const [data, setData] = useState(product);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    description: product.description,
  });
  const handleChange = (e) => {
    setInputs((prevs) => ({ ...prevs, [e.target.name]: e.target.value }));
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleEdit = async () => {
    setLoading(true);
    try {
      const res = await axios.put(
        `https://khemsafe.vercel.app/api/products/${product._id}`,
        inputs
      );
      setProduct(res.data);
      if (res) {
        setLoading(false);
        handleCancel();
        toast.success("Item updated succesfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div
      className="w-[90%] max-w-[600px] h-[450px] bg-white mx-auto rounded-sm shadow-md p-3 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] modal"
      style={{ display: `${showModal == true ? "block" : "none"}` }}
    >
      <h2 className="text-xl text-gray-600 mb-3">Edit product</h2>
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
            value={inputs.description}
            name="description"
            className="border border-solid w-full p-2 resize-none"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="flex gap-3 absolute right-3 bottom-3">
        <button
          className="border border-solid px-3 py-1 bg-slate-600 text-white"
          onClick={handleEdit}
        >
          {!loading ? "Done" : "Updating..."}
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

export default EditProgram;
