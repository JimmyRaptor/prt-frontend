import React, { useState } from "react";
import { Marker } from "react-map-gl";
import { Flex, Box, Text, Progress } from "@chakra-ui/react";
import TruckIcon from "./TruckIcon.jsx"; // 确保正确导入你的 TruckIcon 组件
import Image from "next/image";

function CustomMarker({ longitude, latitude, id, color, activity, payload }) {
  // 使用useState钩子添加一个新的状态isDetailVisible来控制详情的显示与隐藏
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  // 定义点击事件处理函数
  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };
  //console.log(longitude, latitude, id, color, activity, payload)
  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <Box position="relative">
        {isDetailVisible && (
          <Flex
            direction="column"
            bg="rgba(0, 0, 0, 0.5)"
            borderRadius="5px"
            color={color}
            align="center"
            width="auto"
            position="absolute"
            bottom="30px"
            left="50%"
            transform="translateX(-50%)"
            zIndex="1"
          >
            <Box p="5px 10px" width="100%">
              <Flex align="center">
                <Box w="50px" h="50px" flexShrink={0}>
                  <TruckIcon width="50" height="50" color={color} />
                </Box>
                <Box ml="10px">
                  <Text fontWeight="bold" fontSize="1rem">
                    {id}
                  </Text>
                  <Text fontSize="1rem">{activity}</Text>
                </Box>
              </Flex>
            </Box>
            <Progress
              value={payload}
              size="xs"
              colorScheme="green"
              width="100%"
              mt="2px"
            />
          </Flex>
        )}
        {/* 圆形组件 */}
        <Box
          position="relative"
          width="30px" 
          height="30px"
          borderRadius="50%" 
          bgGradient="linear(to-br, lightblue, deepskyblue)"
          border="2px solid"
          borderColor="whiteAlpha.800"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          bg={color} 
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={toggleDetailVisibility}
        >
          <Image
            src="/smallTruck.png"
            alt="Small Truck"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Marker>
  );
}

export default CustomMarker;
