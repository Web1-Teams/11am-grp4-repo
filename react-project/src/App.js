import React from "react";
import StoreItem from "./components/StoreItem";
import Store from "./components/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ResetPassword from "./components/Resetpassword";
import ForgetPassword from "./components/forgetpassword";

import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <BrowserRouter>

      <Routes>
        {/* Route for ForgetPassword component */}
        <Route path="/" element={<ForgetPassword />} />

        {/* Route for ResetPassword component */}
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
