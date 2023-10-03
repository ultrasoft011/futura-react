import React, { useState } from "react";

const TabsComponent = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Convenios", "Bienestar Universitario", "Becas / Auxilios"];

  const handleTabChange = (increment) => {
    const newIndex = (activeTab + increment + tabs.length) % tabs.length;
    setActiveTab(newIndex);
    const selectedTab = tabs[newIndex];
    // Llama a la función de devolución de llamada con la pestaña seleccionada
    onTabChange(selectedTab);
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1.3em",
        marginBottom: "1.1em",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "220px",
          alignItems: "center",
          position: "relative",
        }}
      >
        <i
          className="bi bi-arrow-left-short"
          style={{
            color: "#05cdf9",
            fontSize: "2em",
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={() => handleTabChange(-1)}
        ></i>
        <p style={{ color: "#fff", margin: "0", fontSize: "15px" }}>
          {tabs[activeTab]}
        </p>
        <i
          className="bi bi-arrow-right-short"
          style={{
            color: "#05cdf9",
            fontSize: "2em",
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={() => handleTabChange(1)}
        ></i>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {tabs.map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(index)}
            style={{
              border: "2px solid #ffffff",
              borderRadius: "50%",
              width: "13px",
              height: "13px",
              margin: "0.1em",
              backgroundColor: index === activeTab ? "#05cdf9" : "transparent",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
