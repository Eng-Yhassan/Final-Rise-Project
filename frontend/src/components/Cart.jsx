// src/components/Cart.jsx
import React from "react";

const Cart = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    {/* Left: Shopping Cart */}
                    <div className="md:flex-1 p-6">
                        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

                        {/* Product Row - iPhone */}
                        <div className="flex items-center justify-between border-b pb-4 mb-4">
                            <div>
                                <h3 className="text-lg font-medium">iPhone 16</h3>
                                <p className="text-sm text-gray-500">smart phone</p>
                                <button className="text-red-500 text-sm">Remove</button>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center border rounded">
                                    <button className="px-2 py-1">-</button>
                                    <span className="px-3">1</span>
                                    <button className="px-2 py-1">+</button>
                                </div>
                                <span className="w-20 text-right">$1600</span>
                                <span className="w-20 text-right font-semibold">$1600</span>
                            </div>
                        </div>

                        {/* Product Row - MacBook */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium">macbook</h3>
                                <p className="text-sm text-gray-500">laptops</p>
                                <button className="text-red-500 text-sm">Remove</button>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center border rounded">
                                    <button className="px-2 py-1">-</button>
                                    <span className="px-3">1</span>
                                    <button className="px-2 py-1">+</button>
                                </div>
                                <span className="w-20 text-right">$180</span>
                                <span className="w-20 text-right font-semibold">$180</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="md:w-80 bg-gray-50 p-6 border-l">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                        <div className="flex justify-between mb-4">
                            <span>Items</span>
                            <span>10</span>
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
                            <span>$1780</span>
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