// api.js
export async function fetchData() {
  const response = await fetch(
    'http://35.247.9.156:3001/mqttjson?token=raptortech&payload=85&latitude=23&longitude=24&state=511&activity=512'
  );
  const data = await response.json();
  return data;
}
