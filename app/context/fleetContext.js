"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { fetchFleetData } from "@/app/api";
import config from "@/app/dashboard/fleet/config.json";
import isEqual from "lodash/isEqual";

const FleetContext = createContext();

function updateOriginalDataWithFleetData(originalData, fleetData) {
  fleetData.forEach((fleetItem) => {
    Object.values(originalData).forEach((item) => {
      if (item.device_id === fleetItem.id) {
        item.state = fleetItem.state;
        item.activity = fleetItem.activity;
      }
    });
  });
}

function filterAssetsByTypes(assets, types) {
  const result = {};

  types.forEach((type) => {
    result[type] = Object.values(assets).filter(
      (item) => item["t "].trim() === type
    );
  });

  return result;
}

const types = ["DT", "EX", "DR"];

export const FleetProvider = ({ children }) => {
  const [fleetState, setFleetState] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState({});
  const previousFleetDataRef = useRef([]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const newFleetData = await fetchFleetData();

      if (!isEqual(newFleetData, previousFleetDataRef.current)) {
        setFleetState(newFleetData);
        updateOriginalDataWithFleetData(config.assets, newFleetData);
        const updatedFilteredAssets = filterAssetsByTypes(config.assets, types);
        setFilteredAssets(updatedFilteredAssets);
        
        previousFleetDataRef.current = newFleetData;
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <FleetContext.Provider
      value={{ fleetState, setFleetState, filteredAssets, setFilteredAssets }}
    >
      {children}
    </FleetContext.Provider>
  );
};

export const useFleet = () => {
  const context = useContext(FleetContext);
  if (!context) {
    throw new Error("useFleet must be used within a FleetProvider");
  }
  return context;
};
