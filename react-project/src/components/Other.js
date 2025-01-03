import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

const Other = () => {
  const otherItems = storeItems.filter((item) => item.type === "other");
  return (
    <>
      <Container className="my-4">
        <h1 className="mb-4 text-center" >مطرزات تراثية فاخرة </h1>
        <Row md={2} lg={3} xl={4} className="g-4">
          {otherItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Other;