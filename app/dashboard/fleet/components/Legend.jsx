import React from "react";
import LegendItem from "./LegendItem";

const Legend = () => {
  const statuses = [
    { label: "Down", color: "#E06353" },
    { label: "Delay", color: "#E0A953" },
    { label: "Ready", color: "#5DAB53" },
    { label: "Standby", color: "#70B4FF" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "30px",
        marginTop: "10px",
      }}
    >
      {statuses.map((status, index) => (
        <LegendItem key={index} label={status.label} color={status.color} />
      ))}
    </div>
  );
};

export default Legend;
