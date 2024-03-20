import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import styles from "./tabs.module.css";
import config from "./g_config_0.json";

const TabsComponent = ({ device, tabPosition, setSelectedDevice }) => {
  const truckConfig = config.machines.DT777;
  const initialStatuses = Object.entries(config.machines.DT777)
    .filter(([key]) => !isNaN(key))
    .map(([key, value]) => ({
      ...value,
      code: key,
      isActivityList: false, 
    }));
  const [statuses, setStatuses] = useState(initialStatuses);
  const [gridTemplateColumns, setGridTemplateColumns] = useState("repeat(2, 1fr)");

  const boxSize = "100px";
  const handleClick = (code, isActivityList) => {
    if (isActivityList) {
      
      setSelectedDevice(null);
    } else {

      const status = statuses.find(status => status.code === code);
      if (!status) return;

      const newStatuses = Object.entries(status.activities).map(([activityCode, activity]) => ({
        desc: activity,
        colour: status.colour,
        code: activityCode, 
        isActivityList: true, 
      }));

      setStatuses(newStatuses);
      setGridTemplateColumns(newStatuses.length > 4 ? "repeat(3, 1fr)" : "repeat(2, 1fr)");
    }
  };
  return (
    <Box
      position="absolute"
      top={tabPosition.y}
      left={tabPosition.x}
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
        {device.name}
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
            onClick={() => handleClick(status.code, status.isActivityList)}
          >
            {status.desc}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TabsComponent;
