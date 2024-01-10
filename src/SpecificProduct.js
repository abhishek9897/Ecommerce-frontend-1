import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from "./Components/Redux-toolkit/CartSlice";
import "./style.css";
function SpecificProduct() {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  console.log("param is", 1 + Number(params.id));

  const handleAddToCart = (item, quantity) => {
    dispatch(AddToCart({ item, quantity }));
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${1 + Number(params.id)}`
      );
      console.log(data.data);
      setData(data.data);
    };
    getData();
  }, [params.id]);
  return (
    <div>
      <Container>
        <Row className="page-wrapper">
          <Col xxl={5} xl={5} lg={5} md={5} sm={5} className="text-center">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <img src={data.image} alt={data} className="w-50 h-50" />
            </div>
          </Col>
          <Col xxl={7} xl={7} lg={7} md={7} sm={7}>
            <div className="w-75  m-auto p-3">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <h5>${data.price}</h5>
              <select
                name="quantity"
                value={quantity}
                onChange={handleQuantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
              <div>
                <Button
                  style={{
                    backgroundColor: "#ff3e6c",
                    fontWeight: "700",
                    border: "1px solid #ff3e6c",
                  }}
                  className="btn px-4"
                  onClick={() => handleAddToCart(data, quantity)}
                >
                  Add To Cart
                </Button>
                <Button
                  style={{ fontWeight: "700" }}
                  className="btn btn-dark mx-3 my-3 px-4"
                >
                  Wishlist
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpecificProduct;
