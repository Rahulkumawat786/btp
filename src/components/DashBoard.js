import InfoBlock from "./blocks/InfoBlock";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <InfoBlock heading={"Temperature"} value={34.5} unit={"C"} />
          <InfoBlock heading={"Water Level"} value={65} unit={"%"} />
          <InfoBlock heading={"Flow Rate"} value={50} unit={"ml/s"} />
          <InfoBlock heading={"Pressure Level"} value={100} unit={"Pa"} />
        </div>
        <div className={styles.block}>
          <InfoBlock heading={"PCR_MW"} value={45} unit={"W/s"} />
          <InfoBlock heading={"Speed"} value={0.2} unit={"m/s"} />
          <InfoBlock heading={"Slip"} value={5} unit={"%"} />
          <InfoBlock heading={"Default"} value={"value"} unit={""} />
        </div>
      </div>
      <div className={styles.camgps}>
        <Link to="/camera" className={styles.camera}>
          <div>Camera</div>
        </Link>
        <Link to="/gps" className={styles.gps}>
          <div>GPS</div>
        </Link>
      </div>
    </>
  );
};
export default DashBoard;
