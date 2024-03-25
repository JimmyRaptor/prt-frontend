"use client";
// FleetPage.jsx
import React from "react";
import FleetContainer from "./components/FleetContainer";
import { BreadcrumbItem, Breadcrumb, BreadcrumbLink } from "@chakra-ui/react";

const FleetPage = () => {
  return (
      <div style={{ background: "#182237", color: "white" }}>
        <Breadcrumb fontWeight="bold" fontSize="xl" margin="20px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/fleet">Devices</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <FleetContainer imageSrc="/fleet/truck_big.png" deviceType="truck" />
          <FleetContainer
            imageSrc="/fleet/excavator_big.png"
            deviceType="excavator"
          />
          <FleetContainer imageSrc="/fleet/drill_big.png" deviceType="drill" />
        </div>
      </div>
  );
};

export default FleetPage;
