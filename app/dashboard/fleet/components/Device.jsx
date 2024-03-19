"use client";
import TruckIcon from "./TruckIcon";
import {Box} from "@chakra-ui/react";

const Device = ({ device, onClick }) => {
  const { name, states } = device;
  const iconBgColor = (states) => {
    switch (states) {
      case 0:
        return "#5DAB53";
      case 1:
        return "#E0A953";
      case 2:
        return "#70B4FF";
      default:
        return "#E06353";
    }
  };

  return (
    <div className={`text-center`} onClick={onClick}>
      <TruckIcon
        width={100}
        height={100}
        fillColor={`${iconBgColor(states)}`}
      />
      <Box fontSize={20} fontWeight={"bold"}>{name}</Box>
    </div>
  );
};

export default Device;
