import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const FooterMobile = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        width: "100%",
        color: "#fff",
      }}
    >
      <Container
        className="mt-2 d-flex align-items-center"
        style={{ paddingBottom: "15px" }}
      >
        <Col
          sm={4}
          className="d-flex justify-content-center align-items-center"
          style={{ marginLeft: "1%", marginRight: "2%" }}
        >
          <i
            class="bi bi-linkedin "
            style={{ fontSize: "20px", marginRight: "15px" }}
          ></i>
          <i
            class="bi bi-facebook"
            style={{ fontSize: "20px", marginRight: "15px" }}
          ></i>
          <i class="bi bi-instagram" style={{ fontSize: "20px", marginRight: "35px" }}></i>
        </Col>
        <Col sm={3} className="mt-3 d-flex align-items-center">
          <p style={{ fontSize: "0.6em", color: "#fff" }}>
            Términos y Condiciones
          </p>
          <p style={{ fontSize: "0.6em", marginLeft: "20px", color: "#fff" }}>
            Sobre Nosotros
          </p>
        </Col>
      </Container>
    </footer>
  );
};
