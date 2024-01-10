import React, { useEffect, useState } from "react";
import CustomProduct from "./CustomProduct";
import { Container, Col, Row } from "react-bootstrap/esm";
import { useNavigate } from "react-router-dom";

function Products({data}) {
 
  const navigate = useNavigate();

  const specificProduct = (id) => {
    // console.log("id", id);
    navigate(`/${id}`);
  };

 
  return (
    <div>
      <Container>
        <Row>
         
          {data?.map((ele, index) => {
            return (
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={4}
                sm={6}
                onClick={() => specificProduct(index)}
              >
                <CustomProduct ele={ele} key={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
