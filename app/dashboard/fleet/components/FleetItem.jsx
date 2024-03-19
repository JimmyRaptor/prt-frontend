import React, { useState } from "react";
import FleetContainer from "./FleetContainer";
import Device from "./Device";
import TabsComponent from "./TabsComponent";

const FleetItem = ({ imageSrc, devices, deviceType }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [tabPosition, setTabPosition] = useState({ x: 0, y: 0 });

  return (
    <FleetContainer className="FleetContainer" imageSrc={imageSrc}>
      {Array.isArray(devices) &&
        devices.map((device) => (
          <React.Fragment key={device.name}>
            <Device
              device={device}
              onClick={(event) => {
                if (selectedDevice === device.name) {
                  setSelectedDevice(null);
                } else {
                  setSelectedDevice(device.name);
                  setTabPosition({
                    x: event.clientX + 10,
                    y: event.clientY + 10,
                  });
                }
              }}
              style={{ position: "relative" }}
              deviceType={deviceType}
            />
            {selectedDevice === device.name && (
              <TabsComponent device={device} tabPosition={tabPosition} setSelectedDevice={setSelectedDevice}/>
            )}
          </React.Fragment>
        ))}
    </FleetContainer>
  );
};

export default FleetItem;
