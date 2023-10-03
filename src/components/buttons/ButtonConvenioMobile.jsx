import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonConvenioMobile = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirige al usuario a la página de la universidad correspondiente
    navigate(`/universidad/${id}`);
  };
  return (
    <button
      style={{
        backgroundColor: "#db3987",
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        marginTop: "15px",
        marginLeft: "20%",
        padding: "2px 10px 1px 10px",
        fontSize: " 0.8em",
        width: "60%",
      }}
      onClick={handleClick}
    >
      CONOCE LA UNIVERSIDAD
    </button>
  );
};
