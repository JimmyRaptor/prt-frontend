import { Flex, Box, Text } from "@chakra-ui/react";

const LegendItem = ({ label, color }) => {
  return (
    <Flex alignItems="center" marginRight="20px">
      <Box
        width="25px"
        height="25px"
        backgroundColor={color}
        marginRight="8px"
      ></Box>
      <Text fontSize={25} fontWeight={"bold"}>
        {label}
      </Text>
    </Flex>
  );
};

export default LegendItem;
