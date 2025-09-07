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

                        {/* Add to Cart Button */}
                        <button
                            
                            className={`mt-4 px-4 py-2 rounded-lg w-full "bg-blue-600 bg-yellow-500 text-white hover:bg-blue-700"
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