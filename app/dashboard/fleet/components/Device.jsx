import { Button, VStack, Text, Flex, Box, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TabsComponent from "./TabsComponent";
import { getState } from "@/app/utils/getState";
import DeviceImage from "./DeviceImage";
import { getActivities } from "@/app/utils/getActivities";

const Device = ({ device, type }) => {
  const [tabPosition, setTabPosition] = useState({ x: 0, y: 0 });
  const [showTabs, setShowTabs] = useState(false);
  const handleClick = (device, e) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    const position = { x: rect.left, y: rect.bottom };
    setTabPosition(position);
    setShowTabs(!showTabs);
  };

  return (
    <VStack
      w="100%"
      minW="100%"
      paddingBottom="20%"
      position="relative"
      align="center"
      className="text-center"
      border="2px solid white"
      borderRadius="lg"
      p={4}
      boxShadow="2xl"
      color="white"
      onClick={(e) => handleClick(device, e)}
      _hover={{
        cursor: "pointer",
        bgGradient: "linear(to-br, gray.0, gray.100)",
        boxShadow: "2xl",
      }}
      transition="all 0.2s ease-in-out"
    >
      <DeviceImage
        device={device}
        type={type}
        color={getState(device.state).color}
      />
      <Text
        fontSize="15px"
        fontWeight="bold"
        color={getState(device.state).color}
      >
        {device.n}
      </Text>
      <Text
        fontSize="10px"
        fontWeight="bold"
        color={getState(device.state).color}
      >
        {device.activity ? getActivities(device, type) : null}
      </Text>
      {showTabs && (
        <TabsComponent
          device={device}
          tabPosition={tabPosition}
          setShowTabs={setShowTabs}
          type={type}
        />
      )}
    </VStack>
  );
};

export default Device;
