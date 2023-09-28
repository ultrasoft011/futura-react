import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import logoFutura from "../assets/logos/logo.png";
import convenio from "../assets/images/convenio-imagen-1.png";
import blueNote from "../assets/icons/blue-note.png";
import greenGain from "../assets/icons/green-gain.png";
import orangePackage from "../assets/icons/orange-package.png";
import pinkPercentage from "../assets/icons/pink-percentage.png";
import { CarouselConvenio } from "../components/CarouselConvenio.jsx";
import "../styles/convenios.css";
import { Footer } from "../components/Footer";

export const Convenios = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ margin: "0px", padding: "0px" }}
      >
        <Row style={{ marginLeft: "20px" }}>
          <Row>
            <Col lg={6} className="mt-4">
              <img
                src={logoFutura}
                alt="Logo futura"
                style={{ width: "180px" }}
              />
              <Row className="contact-futura">
                <Col className="d-flex" lg={4}>
                  <i className="contact-icons bi bi-whatsapp"></i>
                  <p style={{ fontSize: "13px", marginTop: "4px" }}>
                    +3176985753
                  </p>
                </Col>
                <Col className="d-flex" lg={4}>
                  <i className="contact-icons bi bi-envelope"></i>
                  <p style={{ fontSize: "13px", marginTop: "4px" }}>
                    contacto@mifutura.co
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="main-text" lg={12}>
                  <p className="main-text-top">En Futura buscamos</p>
                  <p className="main-text-mid">brindar acceso a la Educación</p>
                  <p className="main-text-bottom">
                    Consigue fondos y mejores beneficios para pagar por tus
                    estudios
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  className="d-flex "
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                >
                  <Col lg={3}>
                    <Card
                      className="card-beneficios align-items-center h-100"
                      style={{ marginRight: "15px", padding: 0 }}
                    >
                      <Card.Img
                        src={blueNote}
                        style={{ marginTop: "15px", width: "100px" }}
                      />
                      <Card.Body>
                        <Card.Text
                          style={{ marginTop: "15px", textAlign: "center" }}
                        >
                          Te ayudamos <br />
                          con tu <br />
                          inscripción
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card
                      className="card-beneficios align-items-center h-100"
                      style={{ marginRight: "15px" }}
                      lg={3}
                    >
                      <Card.Img
                        src={greenGain}
                        style={{ marginTop: "15px", width: "100px" }}
                        lg={3}
                      />
                      <Card.Body>
                        <Card.Text
                          style={{ marginTop: "15px", textAlign: "center" }}
                        >
                          Múltiples <br />
                          opciones
                          <br />
                          para pagar <br />
                          tus estudios
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    {" "}
                    <Card
                      className="card-beneficios align-items-center h-100"
                      style={{ marginRight: "15px" }}
                      lg={3}
                    >
                      <Card.Img
                        src={pinkPercentage}
                        style={{ marginTop: "15px", width: "100px" }}
                      />
                      <Card.Body>
                        <Card.Text
                          style={{ marginTop: "15px", textAlign: "center" }}
                        >
                          Obtén
                          <br />
                          descuentos <br />
                          exclusivos
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card className="card-beneficios align-items-center h-100">
                      <Card.Img
                        src={orangePackage}
                        style={{ marginTop: "15px", width: "100px" }}
                      />
                      <Card.Body>
                        <Card.Text
                          style={{ marginTop: "15px", textAlign: "center" }}
                        >
                          Obtén bonos <br />
                          y/o auxilios <br />
                          educativos <br />
                          con la beca <br />
                          Futura
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Col>
              </Row>
            </Col>

            <Col lg={1} className="mt-4" style={{ width: "6%" }}>
              <button className="navbar-button">
                <p className="blog">Blog</p>
              </button>
            </Col>
            <Col lg={1} className="mt-4" style={{ width: "12%" }}>
              <button className="navbar-button d-flex">
                <p className="mi-cuenta">Mi cuenta</p>
                <i class="bi bi-person-badge"></i>
              </button>
            </Col>
            <Col lg={3}>
              <img
                className="convenio-image"
                src={convenio}
                alt="Logo futura"
              />
            </Col>
          </Row>
        </Row>

        <Row>
          <Col className="convenio-carousel d-block">
            <h1
              style={{
                textAlign: "center",
                marginTop: "70px",
                marginBottom: "30px",
                fontSize: "1.8em",
              }}
            >
              Con el apoyo de
            </h1>
            {/* <ControlledCarousel /> */}
            <CarouselConvenio />
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
};