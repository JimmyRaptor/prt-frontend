import { Box } from "@chakra-ui/react";
import TruckIcon from "./TruckIcon";
import ExcavatorIcon from "./ExcavatorIcon";
import DrillIcon from "./DrillIcon";
const DeviceImage = ({ type, color }) => {
  const selectIcon = (type) => {
    switch (type) {
      case "Truck":
        return <TruckIcon width="100%" height="100%" color={color} />;
      case "Excavator":
        return <ExcavatorIcon width="100%" height="100%" color={color} />;
      case "Drill":
        return <DrillIcon width="100%" height="100%" color={color} />;
      default:
        return null;
    }
  };
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {selectIcon(type, color)}
    </Box>
  );
};

export default DeviceImage;
