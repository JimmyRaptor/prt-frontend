import Image from "next/image";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

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
  const handleBoxClick = (type) => {
    const path = `/dashboard/fleet/${type.toLowerCase()}`;
    router.push(path);
  };
  return (
    <Flex
      marginTop="1rem"
      direction="column"
      align="center"
      width="31%"
      onClick={() => handleBoxClick(deviceType)}
      border="2px solid white"
      borderRadius="lg"
      p={3}
      boxShadow="lg"
      m={2}
    >
      <Box maxWidth="300px" alignSelf="center">
        <Image
          src={imageSrc}
          alt="Left Side Image"
          width={200}
          height={200}
          layout="responsive"
        />
      </Box>
      <SimpleGrid columns={2} spacing={4} marginTop="1rem">
        {statuses.map((status, index) => (
          <Box
            key={index}
            width="10rem"
            height="5rem"
            bg={status.color}
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="lg"
            shadow="md"
          >
            {status.label}: {status.count}
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default FleetContainer;
