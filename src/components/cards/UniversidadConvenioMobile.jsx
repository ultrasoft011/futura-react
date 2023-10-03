import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el nombre de la universidad desde la URL
import { Row } from "react-bootstrap";
import universidadesData from "../../data/universidades.json";
import { AccountBackHeader } from "../header/AccountBackHeader";
import { CarouselInfoUniversidad } from "../carousel/CarouselInfoUniversidad";
import TabsComponent from "../tabs/TabsComponent";

export const UniversidadConvenioMobile = () => {
  const { id } = useParams(); // Obtén el nombre de la universidad desde la URL
  const [selectedTab, setSelectedTab] = useState("Convenios"); // Estado para realizar un seguimiento de la pestaña seleccionada

  // Busca la universidad correspondiente en tus datos
  const universidad = universidadesData.find((uni) => uni.id === Number(id));

  if (!universidad) {
    return <div>Universidad no encontrada</div>; // Puedes manejar el caso en que la universidad no se encuentre
  }

  const handleTabChange = (selectedTab) => {
    // Realiza cualquier acción necesaria con la pestaña seleccionada
    console.log(selectedTab);
    setSelectedTab(selectedTab);
  };

  let content = null; // Variable para almacenar el contenido a mostrar

  // Lógica para mostrar el contenido según la pestaña seleccionada
  if (selectedTab === "Convenios") {
    content = <p style={{ color: "#fff" }}>{universidad.convenios}</p>;
  } else if (selectedTab === "Bienestar Universitario") {
    content = <p style={{ color: "#fff" }}>{universidad.Bienestar}</p>;
  } else if (selectedTab === "Becas / Auxilios") {
    content = <p style={{ color: "#fff" }}>{universidad.Bono}</p>;
  }

  return (
    <div>
      <AccountBackHeader />
      <div>
        <div
          className="text-center"
          style={{ backgroundColor: "#000", paddingTop: "1em" }}
        >
          <div
            style={{
              backgroundColor: "#1b1c1b",
              marginLeft: "1.5em",
              marginRight: "1.5em",
              borderRadius: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Row
              style={{
                backgroundImage: `url(${require(`../../assets/universidades/${universidad["imagen-fondo"]}`)})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                margin: 0,
                padding: 0,
              }}
            >
              <img
                src={require(`../../assets/universidades/${universidad.imagen}`)}
                alt={universidad.nombre}
                style={{
                  maxWidth: "50%",
                  maxHeight: "100%",
                  margin: "1.1em",
                  padding: "1.1em",
                }}
                className="mx-auto"
              />
            </Row>
            <Row
              style={{
                backgroundColor: "#1b1c1b",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "2%",
              }}
            >
              <Row className="d-block">
                <i
                  class="bi bi-linkedin "
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
                <i
                  class="bi bi-facebook"
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
                <i
                  class="bi bi-instagram"
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
              </Row>
              <Row>
                <h2
                  style={{
                    marginTop: "0.4em",
                    fontSize: "1.3em",
                    color: "#ebebeb",
                    fontWeight: "700",
                  }}
                >
                  {universidad.nombre}
                </h2>
              </Row>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#1b1c1b",
              marginLeft: "1.5em",
              marginRight: "1.5em",
              marginTop: "1.1em",
              borderRadius: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Row style={{ marginTop: "1em" }}>
              <iframe
                width="560"
                height="300"
                src="https://www.youtube.com/embed/o68M1XvUGf0?si=VGyOX1ttj2V6TNtv"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Row>
            <Row style={{ marginLeft: "0.5em", marginRight: "0.5em" }}>
              <h3
                style={{
                  marginTop: "0.6em",
                  fontSize: "1.1em",
                  color: "#fff",
                }}
              >
                Sobre la universidad
              </h3>
              <p
                style={{
                  color: "#cbcbcb",
                  fontSize: "0.7em",
                  textAlign: "justify",
                }}
              >
                {universidad.about}
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#1b1c1b",
              marginLeft: "1.5em",
              marginRight: "1.5em",
              marginTop: "1.1em",
              borderRadius: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CarouselInfoUniversidad
              fundada={universidad.fundada}
              egresados={universidad.egresados}
              sedes={universidad.sedes}
            />
          </div>
          <div
            style={{
              backgroundColor: "#1b1c1b",
              marginLeft: "1.5em",
              marginRight: "1.5em",
              marginTop: "1.1em",
              borderRadius: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Row>
              <TabsComponent onTabChange={handleTabChange} />
            </Row>

            <div
              style={{
                backgroundColor: "#1b1c1b",
                marginLeft: "1.5em",
                marginRight: "1.5em",
                borderRadius: "2%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Row
                style={{
                  backgroundImage: `url(${require(`../../assets/universidades/${universidad["imagen-fondo"]}`)})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  margin: 0,
                  padding: 0,
                }}
              >
                <img
                  src={require(`../../assets/universidades/${universidad.imagen}`)}
                  alt={universidad.nombre}
                  style={{
                    maxWidth: "50%",
                    maxHeight: "100%",
                    margin: "1.1em",
                    padding: "1.1em",
                  }}
                  className="mx-auto"
                />
              </Row>
              <Row
                style={{
                  backgroundColor: "#1b1c1b",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "2%",
                }}
              >
                <Row>
                  <p
                    style={{
                      marginTop: "0.4em",
                      fontSize: "0.9em",
                      color: "#ebebeb",
                      textAlign: "justify",
                    }}
                  >
                    {content}
                  </p>
                </Row>
              </Row>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#1b1c1b",
              marginLeft: "1.5em",
              marginRight: "1.5em",
              marginTop: "1.1em",
              borderRadius: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Row
              style={{
                fontSize: "14px",
                marginTop: "1em",
                marginBottom: "1em",
                color: "#fff",
              }}
            >
              Promedio General
            </Row>
            <Row style={{ marginLeft: "0.5em", marginRight: "0.5em" }}>
              <h1>0.0/5</h1>
              <p
                style={{
                  color: "#cbcbcb",
                  fontSize: "0.7em",
                  textAlign: "justify",
                }}
              >
                ESTRELLAS
              </p>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
              </p>
              <hr />
              <p>
                Filtre aquí para conocer la evaluación de acuerdo al nivel y
                modalidad que desee:{" "}
              </p>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
