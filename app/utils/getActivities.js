import config from "../config/g_config.json";


export const getActivities = (device, type) => {
  const machineStatues = config.machines;
  const truckActivities = machineStatues["DT"];
  const drillActivities = machineStatues["DRL"];
  const excavatorActivities = machineStatues["EX"];
  const deviceState = device.state;

  if (truckActivities[deviceState]) {
    switch (type) {
      case "Truck":
        return truckActivities[deviceState].activities[device.activity];
      case "Drill":
        return drillActivities[deviceState].activities[device.activity];
      case "Excavator":
        return excavatorActivities[deviceState].activities[device.activity];
    }
    return [];
  }
  else {
    return [];
  }
};
