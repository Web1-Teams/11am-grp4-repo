import React from "react";
import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import storeItems from "../data/items.json";
import Comments from "./Comments";
import "../styles/productdetails.css"; 

const ProductDetails = () => {
    const { id } = useParams();

    const product = storeItems.find((item) => item.id === parseInt(id));
    if (!product) {
        return <div>Product not found</div>;
    }
    const { name, price, oldPrice, imgUrl } = product;

    return (
        <Container className="py-5">
            <Row>
            <Col md={6} className="text-center">
    <div className="product-image-container">
        <Image src={imgUrl} alt={name} className="product-image" />
    </div>
</Col>


                <Col md={6}>
                    <h2 className="product-name">{name}</h2>

                    <div className="prices mb-4">
                        {oldPrice && <span className="old-price">{`${oldPrice.toFixed(2)}₪`}</span>}
                        <span className="current-price">{`${price.toFixed(2)}₪`}</span>
                    </div>

                    <p className="product-description">
                        بقجة حرارية مطرزة بجودة عالية. مثالية للاستخدام اليومي ولإضافة لمسة
                        فنية إلى أسلوبك.
                    </p>

                    <Button variant="danger" size="lg" className="add-to-cart-button">
                        <i className="fas fa-shopping-cart"></i> أضف إلى السلة
                    </Button>
                </Col>
            </Row>

            <Row className="product-details-container">
    <Col>
        <h4 className="product-details-header">تفاصيل المنتج</h4>
        <ul>
            <li>رقم المنتج: {id}</li>
            <li>السعر: {`${price.toFixed(2)}₪`}</li>
            {oldPrice && <li>السعر القديم: {`${oldPrice.toFixed(2)}₪`}</li>}
        </ul>
    </Col>
</Row>

            <Comments productId={id} />
        </Container>
    );
};

export default ProductDetails;