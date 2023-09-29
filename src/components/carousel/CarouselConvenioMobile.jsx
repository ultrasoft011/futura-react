import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import blueNote from "../../assets/icons/blue-note.png";
import greenGain from "../../assets/icons/green-gain.png";
import orangePackage from "../../assets/icons/orange-package.png";
import pinkPercentage from "../../assets/icons/pink-percentage.png";
import "../../styles/convenios.css";

export const CarouselConvenioMobile = () => {
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

  const numImages = 4; // Reemplaza con el número total de imágenes en tu carrusel
  return (
    <div>
      <Carousel
        className="bg-transparent"
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
      >
        <Carousel.Item>
          <Col lg className="d-block text-center pruebawidth">
            <img
              src={blueNote}
              alt="Fundación Universitaria del Área Andina"
              fluid
            />
            <h3 style={{ color: "#fff" }}>
              Te ayudamos <br />
              con tu <br />
              inscripción
            </h3>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img src={greenGain} alt="Corporación Universitaria Unitec" />
            <h3 style={{ color: "#fff" }}>
              Múltiples <br />
              opciones para pagar <br />
              tus estudios
            </h3>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img
              src={pinkPercentage}
              alt="Universitaria Virtual Internacional"
            />
            <h3 style={{ color: "#fff" }}>
              Obtén
              <br />
              descuentos <br />
              exclusivos
            </h3>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col className="d-block text-center">
            <img
              src={orangePackage}
              alt="Corporación Universitaria Remington"
            />
            <h3 style={{ color: "#fff" }}>
              Obtén bonos <br />
              y/o auxilios <br />
              educativos <br />
              con la beca <br />
              Futura
            </h3>
          </Col>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
