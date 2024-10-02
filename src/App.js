import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import ViewNGOPage from "./Pages/ViewNGOPage";
import LoginPage from "./Pages/LoginPage";
import NgoDashboard from "./Pages/NgoDashboard";
import RegisterPage from "./Pages/RegisterPage";
import Dashboard from "./Pages/Dashboard"; // Import the Dashboard component
import InventoryPage from './Pages/InventoryPage'; // Import the InventoryPage component
import PickupPage from "./Components/PickupPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InventoryPage />} /> {/* Set InventoryPage as the default page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pickup" element={<PickupPage />} /> {/* Define PickupPage route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Added Dashboard route */}
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
