import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "./Components/Redux-toolkit/CartSlice";
import NoItems from "./Components/NoItems";
import axios from "axios";
import { Link } from "react-router-dom";

function CartItems() {
  const CartData = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();
  const totalAmount = CartData.reduce((a, b) => {
    return a + parseInt((b.quantity * b.item.price).toFixed(2));
  }, 0);

  // const handleCheckout = () => {
  //   // const postData = async () => {
  //   //   const data = await axios.post(
  //   //     "http://localhost:3001/create-checkout-session",
  //   //     {
  //   //       body: "abhishek",
  //   //       header: { "content-type": "application/json" },
  //   //     }
  //   //   );
  //   //   const resp = await data.json();
  //   //   console.log("resppvfvfrvfv", resp);
  //   // };
  //   // postData();
  // };

  return (
    <div className="w-75 m-auto">
      {CartData.length !== 0 ? (
        <Container className="mt-5">
          <Row>
            <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={12}>
              <div className=" my-4 d-flex align-items-center justify-content-between border p-2">
                <h6
                  className="pt-1"
                  style={{ fontWeight: "700", fontSize: "small" }}
                >
                  Check Delivery and Services
                </h6>
                <input placeholder="ENTER PINCODE"></input>
              </div>
              <h5>{CartData.length} Total Item/s</h5>
              <div className="border p-3">
                <Container className="">
                  {CartData?.map((ele, index) => {
                    return (
                      <Row
                        style={{ height: "150px" }}
                        className="border p-2 my-1"
                      >
                        <Col
                          xxl={3}
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          style={{
                            backgroundImage: `url(${ele.item.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                          }}
                        ></Col>

                        <Col xxl={9} xl={9} lg={9} md={9} sm={9} xs={9}>
                          <div className="d-flex align-items-center justify-content-between">
                            <h6>{ele.item.title}</h6>
                            <svg
                              onClick={() => dispatch(RemoveFromCart(ele))}
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="12"
                              viewBox="0 0 384 512"
                            >
                              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p>${ele.item.price}</p>
                            <p
                              className="text-end"
                              style={{ fontWeight: "700", fontSize: "small" }}
                            >
                              Quantity:{ele.quantity}
                            </p>
                          </div>
                          <small>
                            <strong>14</strong> days return available
                          </small>
                        </Col>
                      </Row>
                    );
                  })}
                </Container>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
              <div className="p-3 m-2 border">
                <h4>Price Details</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Total MRP</h6>
                  <small>${totalAmount}</small>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Shipping Fee</h6>
                  <div>
                    {" "}
                    <small style={{ textDecoration: "line-through" }}>
                      $49
                    </small>
                    <small className="ms-1" style={{ color: "green" }}>
                      Free
                    </small>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Total Amount</h6>
                  <small>${totalAmount}</small>
                </div>
                <div className="w-100">
                  <Link to="https://buy.stripe.com/test_14k7uDcGMdbF0y48ww">
                    <Button
                      type="submit"
                      className="w-100"
                      style={{
                        backgroundColor: "#ff3e6c",
                        fontWeight: "700",
                        border: "1px solid #ff3e6c",
                      }}
                    >
                      PLACE ORDER
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <NoItems />
      )}
    </div>
  );
}

export default CartItems;
