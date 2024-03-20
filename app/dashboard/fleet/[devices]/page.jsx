"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Device from "../components/Device";
import data from "@/public/fleet/devices.json";
import Legend from "../components/Legend";
import TabsComponent from "../components/TabsComponent";
import { useState } from "react";

const DevicePage = () => {
  const pathname = usePathname();
  const type =
    pathname.split("/")[3].charAt(0).toUpperCase() +
    pathname.split("/")[3].slice(1);
  const typeName = type.toLowerCase();
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [tabPosition, setTabPosition] = useState({ x: 0, y: 0 });

  const handleDeviceClick = (device, event) => {
    setSelectedDevice(device);
    setTabPosition({ x: event.clientX, y: event.clientY }); // 设定TabsComponent的位置
  };
  return (
    <div style={{ color: "white" }}>
      <Flex justifyContent="space-between" alignItems="center" margin="10px">
        <Breadcrumb fontWeight="bold" fontSize="xl" margin="20px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/fleet">Devices</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="">{type}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Legend />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="20px">
        {data[typeName].map((device, index) => (
          <Device
            key={index}
            device={device}
            type={typeName}
            onClick={(event) => handleDeviceClick(device, event)}
          />
        ))}
        {selectedDevice && (
          <TabsComponent
            device={selectedDevice}
            tabPosition={tabPosition}
            setSelectedDevice={setSelectedDevice}
          />
        )}
      </SimpleGrid>
    </div>
  );
};

export default DevicePage;
