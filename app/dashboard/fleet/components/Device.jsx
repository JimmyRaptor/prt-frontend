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
      align="center"
      spacing={4}
      className="text-center"
      border="2px solid white"
      borderRadius="lg"
      p={4} // Padding for the VStack
    >
      <DeviceImage device={device} type={type} />
      <Text fontSize="25px" fontWeight="bold" color="white">
        {device.n}
      </Text>
      <Flex
        width="100%"
        justify="flex-end"
        pr={3} // Padding right for alignment
      >
        <Link
          fontSize="15px"
          fontWeight="bold"
          color="white"
          textDecoration="underline"
          _hover={{
            textDecoration: "none",
          }}
          onClick={() => {
            /* 在这里添加你的点击逻辑 */
          }}
        >
          More information
        </Link>
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
        <Text textAlign="left">Payload:</Text>
        <Text textAlign="right">{device.payload}</Text>
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
        <Text textAlign="left">Ground Speed:</Text>
        <Text textAlign="right">{device.ground_speed}</Text>
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
        <Text textAlign="left">Fuel Level:</Text>
        <Text textAlign="right">{device.fuel_level}</Text>
      </Flex>
      <Button
        height={50}
        width={280}
        fontWeight="bold"
        color="white"
        bg={getState(device.state).color}
        borderRadius="md"
        onClick={(e) => handleClick(device, e)}
        boxShadow="lg"
        border="2px solid"
        borderColor="gray.200"
      >
        <Flex flexDirection={"column"}>
          <Box fontSize={25}>{getState(device.state).name}</Box>
          <Box fontSize={15}>{getActivities(device, type)}</Box>
        </Flex>
      </Button>
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
