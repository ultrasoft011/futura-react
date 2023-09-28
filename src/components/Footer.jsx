import React from "react";
import Container from "react-bootstrap/Container";
import logoFuturaWhite from "../assets/logos/logowhite.png";
import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        width: "100%",
        color: "#fff",
        marginTop: "7%",
      }}
    >
      <Container className="d-flex m-4 text-center align-items-center">
        <Col lg={3}>
          {" "}
          <img src={logoFuturaWhite} style={{ width: "180px" }}></img>
        </Col>
        <Col lg={5} className="d-flex mt-3 align-items-baseline">
          <p style={{ marginRight: "25px" }}>Términos y Condiciones</p>
          <p style={{ marginLeft: "25px" }}>Sobre Nosotros</p>
        </Col>
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-baseline"
          style={{ marginLeft: "12%" }}
        >
          <i
            class="bi bi-linkedin "
            style={{ fontSize: "36x", marginRight: "15px" }}
          ></i>
          <i
            class="bi bi-facebook"
            style={{ fontSize: "36px", marginRight: "15px" }}
          ></i>
          <i class="bi bi-instagram" style={{ fontSize: "36px" }}></i>
        </Col>
      </Container>
    </footer>
  );
};
