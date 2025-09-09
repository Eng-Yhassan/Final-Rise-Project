import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("img", img);

    try {
      await axios.post("http://localhost:3003/create/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product Added Successfully ✅");
      setName("");
      setPrice("");
      setDesc("");
      setQuantity("");
      setCategory("");
      setImg(null);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-yellow-600">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border p-2 rounded"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Product Image</label>
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            className="w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
