import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import styles from "./tabs.module.css";
import config from "../g_config_0.json";
import { useFleet } from "@/app/context/fleetContext";

const TabsComponent = ({ device, setShowTabs }) => {
  const { updateFilteredAssets } = useFleet();

  const truckConfig = config.machines.DT777;
  const initialStatuses = Object.entries(config.machines.DT777)
    .filter(([key]) => !isNaN(key))
    .map(([key, value]) => ({
      ...value,
      code: key,
      isActivityList: false,
    }));
  const [statuses, setStatuses] = useState(initialStatuses);
  const [gridTemplateColumns, setGridTemplateColumns] =
    useState("repeat(2, 1fr)");

  const boxSize = "100px";
  const handleClick = (status, isActivityList) => {
    if (isActivityList) {
      setShowTabs(false);
    } else {
      const status = statuses.find((status) => status.code === status.code);
      if (!status) return;

      const newStatuses = Object.entries(status.activities).map(
        ([activityCode, activity]) => ({
          desc: activity,
          colour: status.colour,
          code: activityCode,
          isActivityList: true,
        })
      );

      setStatuses(newStatuses);
      setGridTemplateColumns(
        newStatuses.length > 4 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
      );
    }
  };
  return (
    <Box
      position="absolute"
      className={`${styles.appleBorder} ${styles.growAnimation}`}
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
        {statuses.map((status, index) => (
          <Box
            key={index}
            bg={status.colour}
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
            onClick={() => handleClick(status, status.isActivityList)}
          >
            {status.desc}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TabsComponent;
