import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const redirectToConvenios = () => {
    navigate("/convenios");
  };
  return (
    <div>
      <h1>Esta es la página de inicio</h1>
      <button onClick={redirectToConvenios}>Ir a Convenios</button>
    </div>
  );
};
