import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import storeItems from "../data/items.json"
import StoreItem from "./StoreItem";

const Thobe = () => {
  // تصفية العناصر التي تنتمي إلى الأثواب فقط
  
  const thobeItems = storeItems.filter((item) => item.type === "thobe");

  return (
    <>
    
      <Container className="my-4">
        <h1 className="mb-4 text-center">أثواب تقليدية وحديثة</h1>
        <Row md={2} lg={3} xl={4} className="g-4">
          {thobeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Thobe;
