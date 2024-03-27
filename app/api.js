import Papa from "papaparse";
async function fetchCSVData() {
  const response = await fetch("/app/config/RDN_Master_0.5.csv");
  const reader = response.body.getReader();
  const result = await reader.read(); // raw array
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);
  Papa.parse(csv, {
    complete: function(results) {
      console.log(result.data)
    },
    header: true // 将第一行视为字段名
  });
}

export async function fetchFleetData() {
  const response = await fetch(
    "http://35.247.9.156:3001/mqttjson?token=raptortech&state=511&activity=512&ground_speed=28&payload=85&fuel_level=51"
  );
  //fetchCSVData()
  const data = await response.json();
  return data;
}
