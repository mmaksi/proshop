import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import fetchProductsStartAsync from "../store/products/products.action";
import {
  selectProducts,
  selectProductsIsLoading,
  selectProductsIsLoadingError,
} from "../store/products/products.selector";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStartAsync());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsIsLoading);
  const error = useSelector(selectProductsIsLoadingError);

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>Error loading data</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
