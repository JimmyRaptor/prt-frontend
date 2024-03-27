"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Flex,
  Box,
  VStack,
} from "@chakra-ui/react";
import Device from "../components/Device";
import { useState, useMemo } from "react";
import { useFleet } from "@/app/context/fleetContext";
import Select from "../components/Select";

const DevicePage = () => {
  const pathname = usePathname();
  const type =
    pathname.split("/")[3].charAt(0).toUpperCase() +
    pathname.split("/")[3].slice(1);
  const [displayAssets, setDisplayAssets] = useState([]);
  const handleAssetsChange = (assets) => {
    setDisplayAssets(assets);
  };
  console.log("displayAssets", displayAssets)
  const isLoading = displayAssets === null;
  return (
    <div style={{ color: "white" }}>
      <Flex justifyContent="space-between" alignItems="center" margin="10px">
        <Breadcrumb fontWeight="bold" fontSize="l" marginTop="15px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/fleet">Devices</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="">{type}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex direction="row" width="100%" overflow="auto">

        {isLoading ? (
          <Box
            flex="3" 
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="20px" 
          >
            Loading...
          </Box>
        ) : (
          <Box flex="3" padding="20px">
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing="20px"
              width="100%"
            >
              {displayAssets?.map((device, index) => (
                <Device key={device.id || index} device={device} type={type} />
              ))}
            </SimpleGrid>
          </Box>
        )}
        <VStack flex="1" padding="10px">
          <Select type={type} onAssetsChange={handleAssetsChange} />
        </VStack>
      </Flex>
    </div>
  );
};

export default DevicePage;
