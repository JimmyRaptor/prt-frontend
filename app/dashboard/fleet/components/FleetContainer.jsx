import Image from "next/image";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Device from "./Device";


const FleetContainer = ({ imageSrc, deviceType, devices }) => {
  const router = useRouter();
  const statuses = [
    { label: "Ready", color: "#5DAB53" },
    { label: "Delay", color: "#E0A953" },
    { label: "Standby", color: "#70B4FF" },
    { label: "Down", color: "#E06353" },
  ];

    if(devices){
      for (let i = 0; i < statuses.length; i++) {
        statuses[i].count = devices.filter((device) => device.state === i).length;
      }
    }
  return (
    <Flex
      marginTop="1rem"
      direction="column"
      align="center"
      width="31%"
      border="2px solid white"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Device device={devices} type={deviceType} />
    </Flex>
  );
};

export default FleetContainer;
