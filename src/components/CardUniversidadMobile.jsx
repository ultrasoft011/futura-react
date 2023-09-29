import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import universidadesData from "./universidades";
import universidadesData from "../data/universidades.json";
import { ButtonConvenioMobile } from "./ButtonConvenioMobile";

export const CardUniversidadMobile = () => {
  return (
    <Container style={{ backgroundColor: "#161616" }}>
      {universidadesData.map((universidad, index) => (
        <Row key={index}>
          <Row>
            <Col xs={5} style={{ marginLeft: "1.3em" }}>
              <Row style={{ marginTop: "1.2em", marginBottom: "0.3em" }}>
                <Col>
                  <i
                    class="bi bi-heart"
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                      fontSize: "1em",
                    }}
                  ></i>
                </Col>
                <Col>
                  <i
                    class="bi bi-share"
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                      fontSize: "1em",
                    }}
                  ></i>
                </Col>
              </Row>
              <Row>
                <img
                  src={require(`../assets/universidades/${universidad.imagen}`)}
                  alt={universidad.nombre}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                  }}
                />
              </Row>
            </Col>
            <Col sx={8}>
              <Row
                style={{
                  color: "#fff",
                  fontSize: "1em",
                  fontWeight: 700,
                  marginTop: "1.2em",
                }}
              >
                {universidad.nombre}
              </Row>
              <Row
                style={{ color: "#fff", fontSize: "0.8em", marginTop: "7px" }}
              >
                % de interes
              </Row>
              <Row
                style={{ color: "#fff", fontSize: "0.8em", marginTop: "7px" }}
              >
                {universidad.descuento}
              </Row>
            </Col>
          </Row>

          <Row style={{ padding: "0 15px 0 15px", margin: "0 0 20px 0" }}>
            <ButtonConvenioMobile />
          </Row>
        </Row>
      ))}
    </Container>
  );
};
