import React from "react";
import { Col } from "react-bootstrap";

export const AccountBackHeader = () => {
  return (
    <div
      className="d-flex mt-1 p-4 justify-content-between"
      style={{
        color: "#05cdf9",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#000",
        fontSize: "2.2em",
      }}
    >
      <Col sm={6}>
        <i
          class="bi bi-arrow-left-circle-fill"
          style={{ marginLeft: "0.5em" }}
        ></i>
      </Col>
      <Col sm={6}>
        <i class="bi bi-person-circle" style={{ marginRight: "0.5em" }}></i>
      </Col>
    </div>
  );
};
