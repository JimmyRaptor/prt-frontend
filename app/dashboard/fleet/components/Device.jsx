import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";




const Device = ({ type, device, onClick }) => {
  const { name, states } = device;
  const GetState = (states) => {
    switch (states) {
      case 0:
        return { color: "#5DAB53", name: "Ready" };
      case 1:
        return { color: "#E0A953", name: "Delay" };
      case 2:
        return { color: "#70B4FF", name: "Standby" };
      case 3:
        return { color: "#E06353", name: "Down" };
      default:
        return { color: "transparent", name: "Unknown" }; 
    }
  };
  
  
  return (
    <Flex
      direction="column"
      align="center"
      onClick={onClick}
      className="text-center"
      border="2px solid white" 
      borderRadius="lg"
    >
      <Image
        src={`/fleet/${type}_big.png`}
        width={200}
        height={200}
        alt={name}
      />
      <Flex
        direction="row"
        width="200px"
        justify="space-between"
        marginBottom="1rem"
      >
        <Box
          width="calc(50% - 0.5rem)"
          height="50px"
          fontSize="20"
          fontWeight="bold"
          borderRadius="md"
          bg="#006699"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {name}
        </Box>
        <Box
          width="calc(50% - 0.5rem)"
          height="50px"
          fontSize="20"
          fontWeight="bold"
          color="white"
          bg={GetState(states).color}
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {GetState(states).name}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Device;
