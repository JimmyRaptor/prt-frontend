import { Button, VStack, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TabsComponent from "./TabsComponent";
import { GetState } from "@/app/utils/getState";
import DeviceImage from "./DeviceImage";

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
      align="center"
      spacing={4}
      className="text-center"
      border="2px solid white"
      borderRadius="lg"
      p={4} // Padding for the VStack
    >
      <DeviceImage device={device} type={type}/>
      <Text fontSize="25px" fontWeight="bold" color="white">
        {device.n}
      </Text>
      <Flex
        width="100%"
        justify="space-between"
        px={3}
        fontSize="15px"
        color="white"
        fontWeight="bold"
        borderBottom="2px solid white"
      >
        <Text textAlign="left">Mod:</Text>
        <Text textAlign="right">{device.mod}</Text>
      </Flex>
      <Flex
        width="100%"
        justify="space-between"
        px={3}
        fontSize="15px"
        color="white"
        fontWeight="bold"
        borderBottom="2px solid white"
      >
        <Text textAlign="left">OEM:</Text>
        <Text textAlign="right">{device.oem}</Text>
      </Flex>
      <Button
        height="50px"
        width="300px"
        fontSize="20px"
        fontWeight="bold"
        color="white"
        bg={GetState(device.state).color}
        borderRadius="md"
        onClick={(e) => handleClick(device, e)}
        boxShadow="lg"
        border="2px solid"
        borderColor="gray.200"
      >
        {GetState(device.state).name}
      </Button>
      {showTabs && (
        <TabsComponent
          device={device}
          tabPosition={tabPosition}
          setShowTabs={setShowTabs}
        />
      )}
    </VStack>
  );
};

export default Device;
