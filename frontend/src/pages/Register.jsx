import React, { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Register = () => {
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister  = () => {
    axios.post("http://localhost:3003/create/customer",
      {
        name:name,
        phone:phone,
        email:email,
        password:password
      }
    ).then(() => {
      alert("thanks you're welcome")
      navigate("/Login")
    }).catch((error) => {
      alert("email exisist before")
    })
  }

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={(e) => e.preventDefault()} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Registration</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
           value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Enter your phone number"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
           value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
           value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button 
          onClick={handleRegister}
          className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
