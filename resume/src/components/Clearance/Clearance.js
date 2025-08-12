import React from "react";
import styles from "./clearance.module.css";

const Clearance = ({ clear }) => {
  return (
    <div className={styles.clearSection}>
      <h1 className="sectionTitle">Clearance</h1>
      <div className={styles.clearValue}>{clear}</div>
    </div>
  );
};

export default Clearance;
