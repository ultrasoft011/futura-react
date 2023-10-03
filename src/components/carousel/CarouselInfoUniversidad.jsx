import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";
import "../../styles/convenios.css";

export const CarouselInfoUniversidad = ({ fundada, egresados, sedes }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === numImages - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => {
      clearInterval(timer); // Limpia el temporizador al desmontar el componente
    };
  }, []);

  const numImages = 3; // Reemplaza con el número total de imágenes en tu carrusel
  return (
    <div>
      <Carousel
        className="bg-transparent"
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
      >
        <Carousel.Item className="mt-3">
          <Col lg className="d-block text-center">
            <i
              class="bi bi-flag"
              style={{
                fontSize: "2.5em",
                color: "#fff",
                margin: 0,
                padding: "0.2em 0.3em",
                backgroundColor: "#05cdf9",
                borderRadius: "10%",
              }}
            ></i>
            <p
              style={{
                color: "#fff",
                margin: "0.8em 0 0.5em 0",
                padding: 0,
                fontSize: "15px",
              }}
            >
              {fundada}
            </p>
          </Col>
        </Carousel.Item>
        <Carousel.Item className="mt-3">
          <Col className="d-block text-center">
            <i
              class="bi bi-mortarboard"
              style={{
                fontSize: "2.5em",
                color: "#fff",
                margin: 0,
                padding: "0.1em 0.3em",
                backgroundColor: "#05cdf9",
                borderRadius: "10%",
              }}
            ></i>
            <p
              style={{
                color: "#fff",
                margin: "0.8em 0 0.5em 0",
                padding: 0,
                fontSize: "15px",
              }}
            >
              Egresados Totales: {egresados}
            </p>
          </Col>
        </Carousel.Item>
        <Carousel.Item className="mt-3">
          <Col className="d-block text-center">
            <i
              class="bi bi-pin-map"
              style={{
                fontSize: "2.5em",
                color: "#fff",
                margin: 0,
                padding: "0.1em 0.3em",
                backgroundColor: "#05cdf9",
                borderRadius: "10%",
              }}
            ></i>
            <p
              style={{
                color: "#fff",
                margin: "0.8em 0 0.5em 0",
                padding: 0,
                fontSize: "15px",
              }}
            >
              Sedes: <br />
              {sedes}
            </p>
          </Col>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
