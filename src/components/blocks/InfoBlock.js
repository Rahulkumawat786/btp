import React from "react";
import styles from "./infoblock.module.css";
const InfoBlock = ({ heading, value, unit }) => {
  return (
    <div className={styles.block}>
      <div className={styles.heading}>{heading}</div>
      <hr
        style={{
          background: "#c4c1c1",
          height: "1px",
          width: "95%",
        }}
      />
      <div className={styles.value}>
        {value} {unit}
      </div>
    </div>
  );
};
export default InfoBlock;
