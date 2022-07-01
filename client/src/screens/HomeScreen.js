import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { getData } from "../utils/data.utils";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products)

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await getData("v1/products");
      setProducts(fetchedProducts)
    }
    getProducts()
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeScreen;
