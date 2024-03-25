export async function fetchFleetData() {
    const response = await fetch(
      'http://35.247.9.156:3001/mqttjson?token=raptortech&state=511&activity=512'
    );
    const data = await response.json();
    return data;
  }
  