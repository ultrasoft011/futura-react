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
      <Container
        className="mt-4 d-flex align-items-center"
        style={{ paddingBottom: "15px" }}
      >
        <Col lg={3}>
          <img
            src={logoFuturaWhite}
            style={{ width: "180px" }}
            alt="logo futura"
          ></img>
        </Col>
        <Col lg={4} className="d-flex mt-3 align-items-baseline">
          <p style={{ marginRight: "20px", fontSize: "12px", color: "#fff" }}>
            Términos y Condiciones
          </p>
          <p style={{ marginLeft: "20px", fontSize: "12px", color: "#fff" }}>
            Sobre Nosotros
          </p>
        </Col>
        <Col
          lg={3}
          className="d-flex justify-content-center align-items-baseline"
          style={{ marginLeft: "14%" }}
        >
          <i
            class="bi bi-linkedin "
            style={{ fontSize: "30px", marginRight: "15px" }}
          ></i>
          <i
            class="bi bi-facebook"
            style={{ fontSize: "30px", marginRight: "15px" }}
          ></i>
          <i class="bi bi-instagram" style={{ fontSize: "30px" }}></i>
        </Col>
      </Container>
    </footer>
  );
};
