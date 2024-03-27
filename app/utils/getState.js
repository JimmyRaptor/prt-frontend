export const getState = (states) => {
    switch (states) {
      case 0: return { color: "#5DAB53", name: "Ready" };
      case 1: return { color: "#E0A953", name: "Delay" };
      case 2: return { color: "#70B4FF", name: "Standby" };
      case 3: return { color: "#E06353", name: "Down" };
      default: return { color: "transparent", name: "Unknown" };
    }
  };