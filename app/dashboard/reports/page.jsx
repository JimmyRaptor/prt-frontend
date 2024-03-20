"use client";

import { useEffect } from "react";
//import fetchGuestToken from "./token.mjs";
const fetchGuestToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJqaW1teSIsImxhc3RfbmFtZSI6ImZ1IiwidXNlcm5hbWUiOiJhZG1pbiJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6ImUwMmRkZTcxLTgzZjUtNDM4Yy05NTQzLWJmY2FkZWE2NzUzNyJ9XSwicmxzX3J1bGVzIjpbXSwiaWF0IjoxNzA3MTk5NjkyLjExMTgyNjQsImV4cCI6MTcwNzE5OTk5Mi4xMTE4MjY0LCJhdWQiOiJodHRwOi8vMC4wLjAuMDo4MDgwLyIsInR5cGUiOiJndWVzdCJ9.7l-USHKCBG-3DRp8SmEfl68M-OhwzFA4szU-1nRtob4"
import styles from "./supersetDashboard.module.css"

const SupersetDashboard = () => {
  useEffect(() => {
    const embedDashboard = async () => {
      const { embedDashboard: embed } = await import(
        "@superset-ui/embedded-sdk"
      );

      embed({
        id: "e02dde71-83f5-438c-9543-bfcadea67537",
        supersetDomain: "http://localhost:8088/",
        mountPoint: document.getElementById("my-superset-container"),
        fetchGuestToken: () => fetchGuestToken,
        dashboardUiConfig: {
          hideTitle: true,
          filters: {
            expanded: true,
          },
        },
      });
    };

    embedDashboard();
  }, []);
  return (
    <div
      id="my-superset-container"
      className={styles.iframeContainer}
    ></div>
  );
};

export default SupersetDashboard;
