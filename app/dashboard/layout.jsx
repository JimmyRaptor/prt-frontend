import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import { FleetProvider } from "@/app/context/fleetContext";

const Layout = ({ children }) => {
  return (
    <FleetProvider>
      <div className={styles.container} style={{ background: "151c2c" }}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
      </div>
    </FleetProvider>
  );
};
export default Layout;
