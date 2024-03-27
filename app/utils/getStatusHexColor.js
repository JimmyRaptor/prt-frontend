export default function getStatusHexColor(status) {
  switch (status) {
    case "ready":
      return "#5DAB53"; // Sea green
    case "down":
      return "#E06353"; // Tomato
    case "standby":
      return "#70B4FF"; // Dodger blue
    case "delay":
      return "#E0A953"; // Orange
    case "unknown":
      return "#808080"; // Gray
    default:
      return "#808080"; // Default gray
  }
}
