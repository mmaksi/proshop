import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProductStartAsync from "../store/productDetails/productDetails.action";
import { selectProductDetails } from "../store/productDetails/productDetails.selector";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductStartAsync(productId));
  }, [dispatch, productId]);

  const product = useSelector(selectProductDetails)

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
