import { Checkbox, Stack, Box, Text } from "@chakra-ui/react";
import { useFleet } from "@/app/context/fleetContext";
import { useState, useEffect } from "react";
import { useTheme } from "@chakra-ui/react";
import getStatusHexColor from "@/app/utils/getStatusHexColor";
import capitalize from "@/app/utils/capitalize";

export default function Select({ type, onAssetsChange }) {
  const { filteredAssets } = useFleet();
  
  const [originalAssets, setOriginalAssets] = useState([]);
  const [displayAssets, setDisplayAssets] = useState([]);

  useEffect(() => {
    switch (type) {
      case "Truck":
        setOriginalAssets(filteredAssets.DT);
        break;
      case "Excavator":
        setOriginalAssets(filteredAssets.EX);
        break;
      case "Drill":
        setOriginalAssets(filteredAssets.DR);
        break;
      default:
        setOriginalAssets([]);
    }
  }, [type, filteredAssets]);
  const [statusFilter, setStatusFilter] = useState({
    ready: true,
    down: true,
    standby: true,
    delay: true,
    unknown: true,
  });
  useEffect(() => {
    const filtered = originalAssets?.filter((asset) => {
      switch (asset.state) {
        case 0:
          return statusFilter.ready;
        case 1:
          return statusFilter.down;
        case 2:
          return statusFilter.standby;
        case 3:
          return statusFilter.delay;
        default:
          return statusFilter.unknown;
      }
    });
    if (JSON.stringify(filtered) !== JSON.stringify(displayAssets)) {
      setDisplayAssets(filtered);
      onAssetsChange(filtered);
    }
  }, [statusFilter, originalAssets, onAssetsChange]);

  const handleChange = (status) => {
    setStatusFilter((prevState) => ({
      ...prevState,
      [status]: !prevState[status],
    }));
  };

  return (
    <Box w="100%" overflowY="auto" border="1px solid #E2E8F0" borderRadius="lg">
      <Text as="b" fontSize="2xl" p={5}>
        Search Devices
      </Text>
      <Stack direction="column" spacing="1rem" p={5}>
        {Object.entries(statusFilter).map(([status, isChecked]) => (
          <Checkbox
            key={status}
            size="lg"
            isChecked={isChecked}
            onChange={() => handleChange(status)}
            sx={{
              ".chakra-checkbox__control": {
                borderColor: getStatusHexColor(status),
                _checked: {
                  bg: getStatusHexColor(status),
                  borderColor: getStatusHexColor(status),
                },
              },
              ".chakra-checkbox__label": {
                ml: 2,
              },
            }}
          >
            {capitalize(status)}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
}
