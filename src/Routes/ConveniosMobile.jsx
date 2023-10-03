import React from "react";
import logoFuturaWhite from "../assets/logos/logowhite.png";
import { Container, Row, Col } from "react-bootstrap";
import convenio from "../assets/images/convenio-imagen-1.png";
import { CarouselConvenioMobile } from "../components/carousel/CarouselConvenioMobile";
import { CardUniversidadMobile } from "../components/cards/CardUniversidadMobile";
import { FooterMobile } from "../components/footer/FooterMobile";

export const ConveniosMobile = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // overflowX: 'hidden'
      }}
    >
      <Container>
        <Row
          className="p-3 align-items-center"
          style={{
            position: "sticky",
            top: "0",
            zIndex: "100",
            backgroundColor: "#05cdf9",
          }}
        >
          <Col xs={8}>
            <img
              src={logoFuturaWhite}
              alt="Logo futura"
              style={{
                maxWidth: "180px",
                backgroundColor: "#05cdf9",
                // marginLeft: "10px",
                // marginTop: "15px",
              }}
            />
          </Col>
          <Col xs={4} className="text-center">
            <i
              className="bi bi-person-circle mt-3"
              style={{
                color: "#fff",
                fontSize: "30px",
                // marginTop: "15px",
                // marginLeft: "10px",
              }}
            ></i>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "5px",
            paddingBottom: "15px",
            background: "#c0c0c065",
          }}
        >
          <p
            style={{
              color: "#db3987",
              fontSize: "1.7em",
              fontWeight: 700,
              marginTop: "0.8em",
              marginBottom: "0",
              textAlign: "center",
            }}
          >
            En futura buscamos
          </p>
          <div>
            <h3
              style={{
                background: "#db3987",
                borderRadius: "0.5em",
                color: "#fff",
                fontSize: "2.5em",
                fontWeight: "700",
                lineHeight: "1em",
                marginTop: "0",
                padding: "0.2em 0.5em",
              }}
            >
              brindar acceso a la Educación
            </h3>
          </div>
          <p
            className="text-center"
            style={{ fontSize: "18px", margin: 0, padding: 0 }}
          >
            Consigue fondos <br /> y mejores beneficios <br /> para pagar tus
            estudios
          </p>
        </Row>
        <Row>
          <img
            src={convenio}
            alt="convenio"
            style={{
              width: "100%",
              height: "auto",
              padding: 0,
              backgroundColor: "#000",
            }}
          ></img>
        </Row>
        <Row
          style={{
            backgroundColor: "#000",
            paddingTop: "40px",
            paddingBottom: "25px",
          }}
        >
          <CarouselConvenioMobile />
        </Row>
        <Row
          style={{
            backgroundColor: "#000",
            paddingTop: "40px",
          }}
        >
          <h3
            className="text-center"
            style={{
              color: "#05cdf9",
              fontWeight: "bolder",
              fontSize: "21px",
              borderBottom: "4px solid #05cdf9",
              width: "50%",
              margin: "0 auto 30px auto",
              paddingBottom: "7px",
            }}
          >
            Con el apoyo de
          </h3>

          <CardUniversidadMobile />
        </Row>
        <Row>
          <FooterMobile />
        </Row>
      </Container>
    </div>
  );
};
