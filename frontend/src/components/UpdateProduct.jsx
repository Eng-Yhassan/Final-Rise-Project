import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  // soo qaado xogta product
  useEffect(() => {
    axios.get(`http://localhost:3003/readSingle/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  // update
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3003/update/product/${id}`, product).then(() => {
      alert("✅ Product Updated");
      navigate("/products");
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">✏️ Edit Product</h2>
      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          value={product.name || ""}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
       
        <input
          type="number"
          value={product.price || ""}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          value={product.desc || ""}
          onChange={(e) => setProduct({ ...product, desc: e.target.value })}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          value={product.quantity || ""}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          placeholder="Quantity"
          className="w-full border p-2 rounded"
        />
        <select
          value={product.status || ""}
          onChange={(e) => setProduct({ ...product, status: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="Availbe">Available</option>
          <option value="out of stock">Out of Stock</option>
        </select>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
