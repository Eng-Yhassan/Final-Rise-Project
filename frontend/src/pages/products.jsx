import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    // Fetch Products
    useEffect(() => {
        axios
            .get("http://localhost:3003/read/product") // API endpoint kaaga
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products", err);
            });
    }, []);

    // Delete Product
    const handleDelete = async (id) => {
        if (window.confirm("Ma hubtaa inaad tirtirto product-kan?")) {
            try {
                await axios.delete(`http://localhost:3003/delete/product/${id}`);
                // ka saar state-ka si loo update gareeyo UI
                setProducts(products.filter((item) => item._id !== id));
            } catch (err) {
                console.error("Error deleting product", err);
            }
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">Book List</h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="table-auto w-full text-left border-collapse">
                    <thead className="bg-yellow-500 text-white">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Product Name</th>
                            <th className="p-3">category</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Quantity</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr
                                key={item._id}
                                className="border-b hover:bg-gray-100 transition"
                            >
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">
                                    <img
                                        src={`http://localhost:3003/allImages/${item.prImage}`}
                                        alt={item.name}
                                        className="w-12 h-12 object-contain rounded"
                                    />
                                </td>
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.category}</td>
                                <td className="p-3">{item.desc}</td>
                                <td className="p-3">{item.quantity}</td>
                                <td className="p-3 text-blue-600 font-semibold">
                                    ${item.price}
                                </td>
                                <td
                                    className={`p-3 font-medium ${item.status === "Available" ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {item.status}
                                </td>
                                <td className="p-3 flex space-x-8">
                                    {/* Edit Icon */}
                                    <Link to={`/updateProduct/${item._id}`}>
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <i className="fa fa-edit"></i>
                                        </button>
                                    </Link>

                                    {/* Delete Icon */}
                                    <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:text-red-800">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-4 gap-2">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Prev
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductTable;
