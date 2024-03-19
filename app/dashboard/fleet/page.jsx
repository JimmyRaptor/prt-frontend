"use client";
// FleetPage.jsx
import React from "react";
import devices from "@/public/fleet/devices.json";
import Legend from "./components/Legend";
import FleetItem from "./components/FleetItem";

const FleetPage = () => {
  return (
    <div style={{ background: "#182237", color: "white" }}>
      <Legend />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FleetItem
          imageSrc="/fleet/truck_big1.png"
          devices={devices.truck}
          deviceType="truck"
        />
        <FleetItem
          imageSrc="/fleet/excavator_big.png"
          devices={devices.excavator}
          deviceType="excavator"
        />
        <FleetItem
          imageSrc="/fleet/drill_big.png"
          devices={devices.drill}
          deviceType="drill"
        />
      </div>
    </div>
  );
};

export default FleetPage;
