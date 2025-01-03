import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import PaymentConfirmation from "./components/PaymentConfirmation"; 
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Thobe from "./components/Thobe";
import Shalat from "./components/Shalat";
import Other from "./components/Other";
import Koffieat from "./components/Koffieat";
import Jewelry from "./components/Jewelry";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<PaymentConfirmation />} />
        <Route path="/thobes" element={<Thobe />} /> 
        <Route path="/Shalat" element={<Shalat />} /> 
        <Route path="/other" element={<Other />} /> 
        <Route path="/koffieat" element={<Koffieat />} /> 
        <Route path="/jewelry" element={<Jewelry />} /> 
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;