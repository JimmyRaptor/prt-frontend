import React, { useState } from "react";
import { Marker } from "react-map-gl";
import { Flex, Box, Text, Progress } from "@chakra-ui/react";
import TruckIcon from "./TruckIcon.jsx"; // 确保正确导入你的 TruckIcon 组件

function CustomMarker({ longitude, latitude, id, color, activity, payload }) {
  // 使用useState钩子添加一个新的状态isDetailVisible来控制详情的显示与隐藏
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  // 定义点击事件处理函数
  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      offsetLeft={-20}
      offsetTop={-10}
    >
      {/* 在点击点的上方动态显示Toggle组件 */}
      <Box
        position="relative" // 确保父容器是相对定位，以便于子元素使用绝对定位
      >
        {isDetailVisible && (
          <Flex
            direction="column"
            bg="rgba(0, 0, 0, 0.5)"
            borderRadius="5px"
            color={color}
            align="center"
            width="auto"
            position="absolute" // 使用绝对定位来控制组件的具体位置
            bottom="30px" // 将组件定位到圆形上方
            left="50%"
            transform="translateX(-50%)" // 确保组件水平居中
            zIndex="1" // 提高组件的堆叠顺序，确保它显示在圆形之上
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
          position="absolute" // 使用绝对定位确保圆形位置正确
          bg={color} // 可以根据需要更改颜色
          width="20px"
          height="20px"
          borderRadius="50%"
          bottom="0" // 定位到Marker底部
          left="50%"
          transform="translateX(-50%)"
          onClick={toggleDetailVisibility} // 添加点击事件处理函数
          cursor="pointer" // 修改鼠标样式为手形，提示用户可以点击
        />
      </Box>
    </Marker>
  );
}

export default CustomMarker;
