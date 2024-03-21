import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import CustomTextMarker from "./CustomTextMarker.jsx";
import config from "./config.json";

const center = [135.38535269, -29.579989568];
function SimpleMap(data) {
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

  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <Map
        initialViewState={{
          longitude: center[0],
          latitude: center[1],
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        mapboxAccessToken="pk.eyJ1IjoicmV0YXdlciIsImEiOiJjazJld3N3NTMwZTNrM2xtbXVsc3ZhbG80In0.pDFq8W8k0g8FBZgZ9nitpg"
      >
        {Array.isArray(data.data) &&
          data.data.map((data) => (
            <CustomTextMarker
              latitude={data.latitude}
              longitude={data.longitude}
              id={data.id}
              text={data.id}
              key={data.id}
              activity={config[+data.activity]}
              color={getColor(+data.state)}
              payload={data.payload}
            />
          ))}
      </Map>
    </div>
  );
}

export default SimpleMap;
