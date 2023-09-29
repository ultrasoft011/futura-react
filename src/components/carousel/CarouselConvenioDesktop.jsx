import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import areandina from "../../assets/universidades/areandina.png";
import compensar from "../../assets/universidades/compensar.png";
import uniremington from "../../assets/universidades/uniremington.png";
import unitec from "../../assets/universidades/unitec.png";
import uvirtual from "../../assets/universidades/uvirtual.png";
import { ButtonConvenioDesktop } from "../buttons/ButtonConvenioDesktop.jsx";
import "../../styles/convenios.css";

export const CarouselConvenioDesktop = () => {
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

  const numImages = 5; // Reemplaza con el número total de imágenes en tu carrusel
  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
      >
        <Carousel.Item>
          <Col lg className="d-block text-center pruebawidth">
            <img
              src={areandina}
              alt="Fundación Universitaria del Área Andina"
              fluid
            />
            <h3>Fundación Universitaria del Área Andina</h3>
            <hr />
            <p>% Descuento</p>
            <hr />
            <ButtonConvenioDesktop />
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img src={unitec} alt="Corporación Universitaria Unitec" />
            <h3>Corporación Universitaria Unitec</h3>
            <hr />
            <p>% Descuento</p>
            <hr />
            <ButtonConvenioDesktop />
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img src={uvirtual} alt="Universitaria Virtual Internacional" />
            <h3>Universitaria Virtual Internacional</h3>
            <hr />
            <p>% Descuento</p>
            <hr />
            <ButtonConvenioDesktop />
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img src={uniremington} alt="Corporación Universitaria Remington" />
            <h3>Corporación Universitaria Remington</h3>
            <hr />
            <p>% Descuento</p>
            <hr />
            <ButtonConvenioDesktop />
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img src={compensar} alt="Fundación Universitaria Compensar" />
            <h3>Fundación Universitaria Compensar</h3>
            <hr />
            <p>% Descuento</p>
            <hr />
            <ButtonConvenioDesktop />
          </Col>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
