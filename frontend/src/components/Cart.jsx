    // src/components/Cart.jsx
    import React, { useEffect, useState } from "react";

    const Cart = () => {

        const [productData, setProductData] = useState([]);

        useEffect(() => {
            const getData = JSON.parse(localStorage.getItem("Products")) || []
            const update = getData.map(item => ({
                ...item, quantity :1 , maxQuantity : item.quantity
            }))
            setProductData(update)
        }, [])

        const handleDeleteData = (id) => {
            const removeItem = productData.filter((item) => item._id !== id);
            localStorage.setItem("Products", JSON.stringify(removeItem));

            setProductData(removeItem)
        }

        const totalPrice = productData.reduce((sum,item) => sum + (Number(item.price) * Number(item.quantity)),0)

        const handleIncriment = (id) => {
            setProductData(prd => prd.map(
                item => item._id === id ? {...item, quantity : item.quantity < item.maxQuantity ? item.quantity +1 : item.quantity} :item
            ))
        }

        const handleDecriment = (id) => {
            setProductData(prd => prd.map(
                item => item._id === id ? {...item,quantity :  item.quantity > 1 ?  item.quantity  -1 : item.quantity} :item
            ))
        }


        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                        {/* Left: Shopping Cart */}
                        <div className="md:flex-1 p-6">
                            <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

                            {/* Product Row - iPhone */}
                            {
                                productData.map((item) => {
                                    return (
                                        <div key={item._id} className="flex items-center justify-between border-b pb-4 mb-4">
                                            <div className="flex gap-10">
                                                <img
                                                    src={`http://localhost:3003/allImages/${item.prImage}`}
                                                    alt=""
                                                    className="w-[90px] h-[80px]"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-medium">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">smart phone</p>
                                                    <button onClick={()=> handleDeleteData(item._id)} className="text-red-500 text-sm">Remove</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center border rounded">
                                                    <button onClick={() => handleDecriment(item._id)} className="px-2 py-1">-</button>
                                                    <span className="px-3">{item.quantity}</span>
                                                    <button onClick={() => handleIncriment(item._id)} className="px-2 py-1">+</button>
                                                </div>
                                                <span className="w-20 text-right">{item.price}</span>
                                                <span className="w-20 text-right">{item.price * item.quantity}</span>
                                            </div>
                                        </div>

                                    )
                                })
                            }



                        </div>

                        {/* Right: Order Summary */}
                        <div className="md:w-80 bg-gray-50 p-6 border-l">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                            <div className="flex justify-between mb-4">
                                <span>Items</span>
                                <span>{productData.length}</span>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm mb-2">Shipping</label>
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Choose delivery option</option>
                                    <option>Standard (Free)</option>
                                    <option>Express - $20</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm mb-2">Promo Code</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="flex-1 border rounded-l px-3 py-2"
                                        placeholder="Enter your code"
                                    />
                                    <button className="bg-yellow-500 text-white px-4 rounded-r">
                                        APPLY
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between text-lg font-semibold mb-6">
                                <span>Total Cost</span>
                                <span>${totalPrice}</span>
                            </div>

                            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-400">
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    export default Cart