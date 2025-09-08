import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import axios from "axios"
const Home = () => {
    const [products, setProducts] = useState([]);

    const handleReadData = () => {
        axios.get("http://localhost:3003/read/product") // API endpoint kaaga
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products", err);
            });
    }

    useEffect(() => {
        handleReadData()
    }, []);


    const handleStoreData = (data) => {
        const newData = JSON.parse(localStorage.getItem("products")) || []

        newData.push(data)
        localStorage.setItem("Products", JSON.stringify(newData))
    }

    return (
        <div>
            <HeroSection />
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {products.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white shadow-lg rounded-xl w-64 p-4 text-center border border-gray-200"
                    >
                        {/* Product Image */}
                        <img
                            src={`http://localhost:3003/allImages/${item.prImage}`}
                            alt={item.name}
                            className="w-full h-40 object-contain mb-3 rounded-md"
                        />

                        {/* Product Name */}
                        <h3 className="text-lg font-semibold">{item.name}</h3>



                        {/* Product Price */}
                        <p className="text-blue-600 font-bold text-xl mt-2">${item.price}</p>
                        <p className={`${item.status === "Available" ? "text-green-600" : "text-red-600"} font-bold text-xl mt-2`}>{item.status}</p>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => handleStoreData(item)}
                            disabled={item.status !== "Available"}
                            className={`mt-4 px-4 py-2 rounded-lg w-full "bg-blue-600 ${item.status == "Available" ? "bg-green-500" : "bg-red-400 line-through"} text-white hover:bg-blue-700"
                                 "bg-gray-300 cursor-not-allowed"
                                }`}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home