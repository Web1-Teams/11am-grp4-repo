import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

const Shalat = () => {
  const shalatItems = storeItems.filter((item) => item.type === "shalat");
  return (
    <>
      <Container className="my-4">
        <h1 className="mb-4 text-center" > شالات فاخرة  </h1>
        <Row md={2} lg={3} xl={4} className="g-4">
          {shalatItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shalat;