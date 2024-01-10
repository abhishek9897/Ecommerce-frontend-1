import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomProduct({ ele, key }) {
  return (
    <Card
      className="d-flex flex-direction-row justify-content-center align-items-center text-center p-2 m-2 "
      style={{ Height: "400px", overflow: "hidden" }}
      key={key}
    >
      <Card.Img
        variant="top"
        src={ele.image}
        style={{
          height: "140px",
          width: "150px",
          margin: "auto",
        }}
      />

      <h6 className="mt-3" style={{ height: "70px" }}>
        {ele.title}
      </h6>
      {/* <small>{ele.description}</small> */}

      <div
        style={{ height: "40px", backgroundColor: "#CC0C39", color: "white" }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="px-3" style={{ fontWeight: "700", fontSize: "12px" }}>
          Deal of the day
        </div>
      </div>
      <p className="pt-3 fs-6">
        <bold  style={{ fontWeight: "700", fontSize: "12px" }}>${ele.price}</bold>
      </p>
    </Card>
  );
}

export default CustomProduct;
