import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "./context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";

const StoreItem = ({ id, name, price, imgUrl, oldPrice }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100 text-center border-0">
      <Card.Img
        variant="top"
        src={imgUrl}
        className="rounded-circle mx-auto mt-3"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          backgroundColor: "#f9f9f9",
          padding: "10px",
        }}
      />
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="fs-5 fw-bold mt-3">{name}</Card.Title>
        <div className="prices mt-2">
          <span
            className="text-muted text-decoration-line-through me-2"
            style={{ fontSize: "0.9rem" }}
          >
            {FormatCurrency(oldPrice)}
          </span>
          <span className="text-danger fw-bold" style={{ fontSize: "1.2rem" }}>
            {FormatCurrency(price)}
          </span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 mt-3 btn-danger"
              style={{
                fontSize: "0.9rem",
                borderRadius: "20px",
                padding: "10px 0",
              }}
              onClick={() => increaseCartQuantity(id)}
            >
              <i className="fas fa-shopping-cart"></i> أضف إلى السلة
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  variant="outline-danger"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-5">{quantity} في السلة</span>
                </div>
                <Button
                  variant="outline-success"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                إزالة
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

