import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [file, setFile] = useState(null); // file cusub haddi la doorto

  // soo qaado xogta product
  useEffect(() => {
    axios.get(`http://localhost:3003/readSingle/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  // update
  const handleUpdate = async (e) => {
    e.preventDefault();

    // FormData isticmaal si aad u update-gareyso image + data
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("desc", product.desc);
    formData.append("quantity", product.quantity);
    formData.append("status", product.status);

    if (file) {
      formData.append("img", file); // haddii file cusub la doorto
    }

    await axios.put(`http://localhost:3003/update/product/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("✅ Product Updated");
    navigate("/products");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">✏️ Edit Product</h2>
      <form onSubmit={handleUpdate} className="space-y-3 w-[800px] ml-40">
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
        {/* ✅ Show old image */}
        {product.prImage && (
          <div>
            <p className="text-gray-600">Old Image:</p>
            <img
              src={`http://localhost:3003/allImages${product.prImage}`}
              alt="Product"
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        )}

        {/* ✅ File input for new image */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border p-2 rounded"
        />

        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
