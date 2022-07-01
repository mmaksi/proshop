import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import { getData } from "../utils/data.utils";

const ProductScreen = () => {
  const [product, setProduct] = useState({})
  const { id: productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await getData(`/v1/products/${productId}`);
      setProduct(fetchedProduct[0])
    }
    getProduct()
  }, [productId]);

  const addToCartHandler = () => {};

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                onClick={addToCartHandler}
                className="w-100"
                type="button"
                variant="dark"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
