import config from "../config/g_config.json";

export const getActivities = (device, type) => {
  const machineStatues = config.machines;
  const truckActivities = machineStatues["DT"];
  const drillActivities = machineStatues["DRL"];
  const excavatorActivities = machineStatues["EX"];
  const deviceState = device.state;

  if (machineStatues) {
    switch (type) {
      case "Truck":
        if (truckActivities[deviceState])
          return truckActivities[deviceState].activities[device.activity];
      case "Drill":
        if (truckActivities[deviceState])
          return drillActivities[deviceState].activities[device.activity];
      case "Excavator":
        if (truckActivities[deviceState])
          return excavatorActivities[deviceState].activities[device.activity];
    }
    return ;
  } else {
    return ;
  }
};
