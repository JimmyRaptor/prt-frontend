"use client";
// FleetPage.jsx
import React, { useEffect } from "react";
import FleetContainer from "./components/FleetContainer";
import { BreadcrumbItem, Breadcrumb, BreadcrumbLink } from "@chakra-ui/react";
import { useFleet } from "@/app/context/fleetContext";

const FleetPage = () => {
  const { filteredAssets } = useFleet();
  if(!filteredAssets) return null;
  return (
    <div style={{ background: "#182237", color: "white" }}>
      <Breadcrumb fontWeight="bold" fontSize="xl" margin="20px">
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/fleet">Devices</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FleetContainer imageSrc="/fleet/truck_big.png" deviceType="truck"  devices={filteredAssets["DT"]}/>
        <FleetContainer
          imageSrc="/fleet/excavator_big.png"
          deviceType="excavator"
          devices={filteredAssets["EX"]}
        />
        <FleetContainer imageSrc="/fleet/drill_big.png" deviceType="drill" devices={filteredAssets["DR"]}/>
      </div>
    </div>
  );
};

export default FleetPage;
