import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

const Koffieat = () => {
  const koffieaItems = storeItems.filter((item) => item.type === "koffiea");
  return (
    <>
      <Container className="my-4">
        <h1 className="mb-4 text-center" >كوفيات</h1>
        <Row md={2} lg={3} xl={4} className="g-4">
          {koffieaItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Koffieat