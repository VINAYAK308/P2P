import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";

// Dummy components for Farmer and Buyer dashboards
const FarmerDashboard = () => (
  <div>
    <h2>Farmer Dashboard</h2>
    <p>Welcome Farmer!</p>
  </div>
);

const BuyerDashboard = () => (
  <div>
    <h2>Buyer Dashboard</h2>
    <p>Welcome Buyer!</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-green-600 mb-4">SignUp/SignIn Page</h1>
        <div className="flex gap-4 mb-6">
          <Link
            to="/signup"
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
          >
            Sign In
          </Link>
        </div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
