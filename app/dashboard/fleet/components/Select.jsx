import { Checkbox, Stack, Box, Text } from "@chakra-ui/react";

export default function Select() {
  return (
    <Box w="100%" overflowY="auto" border="1px solid #E2E8F0" borderRadius="lg">
      <Text as="b" fontSize="2xl" p={5}>
        Search Devices
      </Text>
      <Stack direction="column" spacing="1rem" p={5}>
        <Checkbox size="lg" colorScheme="red" defaultChecked>
          Ready
        </Checkbox>
        <Checkbox size="lg" colorScheme="green" defaultChecked>
          Down
        </Checkbox>
        <Checkbox size="lg" colorScheme="blue" defaultChecked>
          Standby
        </Checkbox>
        <Checkbox size="lg" colorScheme="orange" defaultChecked>
          Delay
        </Checkbox>
        <Checkbox size="lg" colorScheme="transparent" defaultChecked isDisabled>
          unknown
        </Checkbox>
      </Stack>
    </Box>
  );
}
