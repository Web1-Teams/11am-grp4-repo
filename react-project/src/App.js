import React from "react";
import StoreItem from "./components/StoreItem";
<<<<<<< Updated upstream
=======
import Store from "./components/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import MainLayout from "./components/MainLayout";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <StoreItem></StoreItem>
=======
      <ShoppingCartProvider>
        <BrowserRouter>

          <Routes>
            <Route element={<MainLayout/>}>              
              <Route path="/" element={<Store />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
