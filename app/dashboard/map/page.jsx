"use client"
import SimpleMap from "./map";
import React, { useState, useEffect } from 'react';
import { fetchData } from "./api";


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
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <SimpleMap data={data} />
    </div>
  );
}
