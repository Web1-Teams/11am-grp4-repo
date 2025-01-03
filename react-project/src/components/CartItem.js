import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.jsx";

import storeItems from "../data/items.json";
import FormatCurrency from "./FormatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
 
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div className="me-auto">
        <div>
          <strong>{item.name}</strong>{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        style={{ borderRadius: "50%" }}
      >
        &times;
      </Button>

      
    </Stack>
  );
};

export default CartItem;
