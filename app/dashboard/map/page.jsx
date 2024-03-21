"use client"

import SimpleMap from "./map";
import React, { useState, useEffect } from 'react';
import { fetchData } from "./api";
import useMotionForCoordinates from "./useMotion";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let intervalId;

    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();

    intervalId = setInterval(getData, 1000); 
    return () => clearInterval(intervalId); 
  }, []);
  const currentFrame = useMotionForCoordinates(data, 2000);
  if (!currentFrame) return <div>Loading...</div>;
  const updatedData = data.map((item, index) => ({
    ...item,
    ...(currentFrame[index] && {
      latitude: currentFrame[index].latitude,
      longitude: currentFrame[index].longitude,
    }),
  }));
  return (
    <div>
      <SimpleMap data={updatedData} />
    </div>
  );
}
