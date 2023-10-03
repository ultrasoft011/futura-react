import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import MediaQuery from "react-responsive";
import {Home} from "./Routes/Home";
import {ConveniosMobile} from "./Routes/ConveniosMobile";
import { ConveniosDesktop } from "./Routes/ConveniosDesktop";
import { UniversidadConvenioMobile } from "./components/cards/UniversidadConvenioMobile";
import "./index.css";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/convenios">
        {/* Ruta para mostrar los componentes basados en el ancho de pantalla */}
        <Route
          index
          element={
            <>
              <MediaQuery maxWidth={767}>
                <ConveniosMobile />
              </MediaQuery>
              <MediaQuery minWidth={768}>
                <ConveniosDesktop />
              </MediaQuery>
            </>
          }
        />
        {/* Otras rutas específicas de /convenios */}
      </Route>
      <Route
        path="/universidad/:id"
        element={<UniversidadConvenioMobileWrapper />}
      />
      {/* Otras rutas... */}
    </Routes>
  </Router>
  );
}

// Componente que envuelve UniversidadConvenioMobile y pasa los parámetros de la URL
function UniversidadConvenioMobileWrapper() {
  const { id } = useParams();
  return <UniversidadConvenioMobile id={id} />;
}


export default App;
