import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    role: "Farmer", // Default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/signin"); // Navigate to Signin after signup
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow-md w-96"
    >
      <h2 className="text-2xl font-bold mb-4 text-green-600">Sign Up</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">Mobile No.</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">User Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        >
          <option value="Farmer">Farmer</option>
          <option value="Buyer">Buyer</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
