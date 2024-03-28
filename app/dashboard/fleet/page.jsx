"use client";
// FleetPage.jsx
import React, { useEffect } from "react";
import { useFleet } from "@/app/context/fleetContext";
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  Spinner,
  Center,
  VStack,
} from "@chakra-ui/react";
import Device from "./components/Device";
import Select from "./components/Select";

const FleetPage = () => {
  const { filteredAssets } = useFleet();
  if (filteredAssets === null || filteredAssets === undefined) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }
  return (
    <Flex gap={5} pt={5}>
      <Box
        w="50%"
        p={5}
        boxShadow="2xl"
        borderRadius="lg"
        bg="gray.700"
        overflowY="auto"
        maxH="90vh"
      >
        <Flex direction="column" align="center" justify="center">
          <Text fontSize={25} color="white" fontWeight={"bold"}>
            Truck
          </Text>
          <Select />
          <SimpleGrid columns={5} spacing={5}>
            {filteredAssets["DT"]?.map((device) => (
              <Device device={device} type="Truck" key={device.id} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
      <Box w="50%" overflowY="auto" maxH="100vh">
        <VStack
          p={4}
          boxShadow="2xl"
          borderRadius="lg"
          bg="gray.700"
          overflowY="auto"
          maxH="50vh"
        >
          <Text fontSize={25} color={"white"} fontWeight={"bold"}>
            Drill
          </Text>
          <Select />
          <SimpleGrid columns={5} spacing={4}>
            {filteredAssets["DR"]?.map((device) => (
              <Device device={device} type="Drill" key={device.id} />
            ))}
          </SimpleGrid>
        </VStack>

        <VStack
          p={4}
          mt={5}
          boxShadow="2xl"
          borderRadius="lg"
          bg="gray.700"
          overflowY="auto"
          maxH="40vh"
        >
          <Text fontSize={25} color={"white"} fontWeight={"bold"}>
            Excavator
          </Text>
          <Select />
          <SimpleGrid columns={5} spacing={4}>
            {filteredAssets["EX"]?.map((device) => (
              <Device device={device} type="Excavator" key={device.id} />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Flex>
  );
};

export default FleetPage;
