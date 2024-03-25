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
import Legend from "../components/Legend";
import { useState, useMemo } from "react";
import { useFleet } from "@/app/context/fleetContext";

const DevicePage = () => {
  const { filteredAssets } = useFleet();
  const pathname = usePathname();
  const type =
    pathname.split("/")[3].charAt(0).toUpperCase() +
    pathname.split("/")[3].slice(1);

  const getTypeName = (type) => {
    switch (type) {
      case "Truck":
        return "DT";
      case "Excavator":
        return "EX";
      case "Drill":
        return "DR";
      default:
        return null; // 如果没有匹配的type，返回null或者你可以设定一个默认值
    }
  };
  const typeName = getTypeName(type);
  const devicesToShow = useMemo(() => {
    return filteredAssets[typeName] || [];
  }, [filteredAssets, typeName]);

  const isLoading = Object.keys(filteredAssets).length === 0;
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="20px">
          {filteredAssets[typeName]?.map((device, index) => (
            <Device
              key={device.id || index}
              device={device}
              type={type}
            />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default DevicePage;
