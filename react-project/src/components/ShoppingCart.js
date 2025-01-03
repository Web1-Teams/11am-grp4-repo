import React from "react";
import { Offcanvas, Stack,Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom"; 
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import storeItems from "../data/items.json";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  const navigate = useNavigate(); 
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="d-flex justify-content-between align-items-center p-3 fw-bold" >
         
  

          Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )} <Button
              variant="danger"
  size="sm"
  onClick={() => navigate("/payment")}
  className=" ms-0 "
>
  الانتقال إلى الدفع
</Button>
       
          </div>
        </Stack>
       
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
