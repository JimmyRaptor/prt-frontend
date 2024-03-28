import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import styles from "./tabs.module.css";
import config from "@/app/config/g_config.json";
import { useFleet } from "@/app/context/fleetContext";

const TabsComponent = ({ device, setShowTabs, type, tabPosition }) => {
  const { updateFilteredAssets } = useFleet();
  function getInitialStates(deviceType, config) {
    if (deviceType) {
      switch (deviceType) {
        case "Truck":
          return config.machines.DT;
        case "Drill":
          return config.machines.DRL;
        case "Excavator":
          return config.machines.EX;
        default:
          return {};
      }
    } else {
      return deviceConfig;
    }
  }

  const initialStates = Object.entries(getInitialStates(type, config))
    .filter(([key]) => !isNaN(key))
    .map(([key, value]) => ({
      ...value,
      code: key,
      isActivityList: false,
    }));
  const [states, setStates] = useState(initialStates);
  const [gridTemplateColumns, setGridTemplateColumns] =
    useState("repeat(2, 1fr)");

  const boxSize = "100px";
  const handleClick = (event, code, isActivityList) => {
    event.stopPropagation();
    if (isActivityList) {
      setShowTabs(false);
    } else {
      const state = states.find((state) => state.code === code);
      const newStates = Object.entries(state.activities).map(
        ([activityCode, activity]) => ({
          desc: activity,
          colour: state.colour,
          code: activityCode,
          isActivityList: true,
        })
      );
      setStates(newStates);
      setGridTemplateColumns(
        newStates.length > 4 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
      );
    }
  };
  return (
    <Box
      position="absolute"
      className={`${styles.appleBorder} ${styles.growAnimation}`}
      zIndex={10}
    >
      <Box
        color="white"
        fontSize="20px"
        className={styles.simplifiedText}
        fontWeight="900"
        p={2}
        textAlign="center"
      >
        {device.n}
      </Box>
      <Grid templateColumns={gridTemplateColumns} gap={2}>
        {states.map((state, index) => (
          <Box
            key={index}
            bg={state.colour}
            width={boxSize}
            height={boxSize}
            fontWeight="900"
            p={2}
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="20px"
            className={`${styles.simplifiedText} ${styles.hoverFloat}`}
            onClick={(event) =>
              handleClick(event, state.code, state.isActivityList)
            }
          >
            {state.desc}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TabsComponent;
