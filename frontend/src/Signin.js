import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signin Data:", credentials);
    
    const { role } = credentials;

    if (role === "Farmer") {
      navigate("/farmer-dashboard");
    } else if (role === "Buyer") {
      navigate("/buyer-dashboard");
    } else {
      console.log("Invalid Role");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow-md w-96"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Sign In</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
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
          value={credentials.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-600">Role</label>
        <select
          name="role"
          value={credentials.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-green-500"
          required
        >
          <option value="" disabled>Select your role</option>
          <option value="Farmer">Farmer</option>
          <option value="Buyer">Buyer</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
      >
        Sign In
      </button>
    </form>
  );
};

export default Signin;
