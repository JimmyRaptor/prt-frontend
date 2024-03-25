import React, { useState, useRef, useEffect } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import CustomTextMarker from "./CustomTextMarker.jsx";
import config from "./config.json";
import useMotionForCoordinates from "./useMotion";
import { Box, Circle, Text } from "@chakra-ui/react";

const center = [135.3813853, -29.5869024];
const fixedBearing = -27;
const fixedPitch = 0;

const statesWithColors = [
  { state: "Down", color: "#E06353" },
  { state: "Ready", color: "#5DAB53" },
  { state: "Standby", color: "#70B4FF" },
  { state: "Delay", color: "#E0A953" },
];
const getColor = (states) => {
  switch (states) {
    case 0:
      return "#5DAB53";
    case 1:
      return "#E0A953";
    case 2:
      return "#70B4FF";
    case 3:
      return "#E06353";
    default:
      return "transparent";
  }
};
function SimpleMap(data) {
  const animatedCoordinates = useMotionForCoordinates(data.data, 1000);
  const [viewState, setViewState] = useState({
    longitude: center[0],
    latitude: center[1],
    zoom: 15,
    bearing: fixedBearing,
    pitch: fixedPitch,
    minZoom: 15,
  });
  const handleViewStateChange = (newViewState) => {
    setViewState({
      ...newViewState,
      bearing: fixedBearing,
      pitch: fixedPitch,
    });
  };
  const [updateCount, setUpdateCount] = useState(0);
  useEffect(() => {
    setUpdateCount((prevCount) => prevCount + 1);
  }, [animatedCoordinates]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(
        `animatedCoordinates updated ${updateCount} times in the last second.`
      );
      setUpdateCount(0); // 重置计数
    }, 1000);
    return () => clearInterval(interval); // 清除定时器
  }, []);
  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <Map
        {...viewState} // 展开viewState作为Map的props
        onMove={(evt) => handleViewStateChange(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        mapboxAccessToken="pk.eyJ1IjoicmV0YXdlciIsImEiOiJjazJld3N3NTMwZTNrM2xtbXVsc3ZhbG80In0.pDFq8W8k0g8FBZgZ9nitpg"
      >
        {animatedCoordinates.map((item) => (
          <CustomTextMarker
            latitude={item.latitude}
            longitude={item.longitude}
            id={item.id}
            text={item.id}
            key={item.id}
            activity={config[+item.activity]}
            color={getColor(+item.state)}
            payload={item.payload}
          />
        ))}
      </Map>
      <Box
        position="absolute"
        top="120px"
        right="30px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        backgroundColor="rgba(255, 255, 255, 0.4)"
        padding="10px"
        borderRadius="5px"
      >
        {statesWithColors.map(({ state, color }) => (
          <Box key={state} display="flex" alignItems="center" mb="4px">
            <Circle size="20px" bg={color} mr="10px" />
            <Text fontWeight="bold">{state}</Text>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SimpleMap;
