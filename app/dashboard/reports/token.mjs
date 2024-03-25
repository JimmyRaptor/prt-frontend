import fetch from "node-fetch";

async function fetchGuestToken() {
  const url = "http://localhost:8088/security/guest_token";

  const payload = {
    user: {
      username: "admin",
      first_name: "jimmy",
      last_name: "fu",
    },
    resources: [
      {
        type: "dashboard",
        id: "e02dde71-83f5-438c-9543-bfcadea67537",
      },
    ],
    rls: [],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Status Code:", response.status);
    if (!response.ok) {
      const errorResponse = await response.json();
      console.log("Error response:", errorResponse);
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the data for further processing
  } catch (error) {
    console.error("Error during fetch operation:", error);
    throw error; // Rethrow the error if needed
  }
}

// Export the function
export default fetchGuestToken;
