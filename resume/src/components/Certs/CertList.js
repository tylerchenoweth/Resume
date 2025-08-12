import React from "react";
import styles from "./certs.module.css";

const monthAbbr = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const CertList = ({ certs }) => {
  return (
    <div className={styles.certList}>
      <h1 className="sectionTitle">Certifications</h1>
      {certs.map((cert, index) => (
        <div key={index} className={styles.certItem}>
          <strong>{cert.cert}</strong> <br />
          <span className={styles.givenBy}>{cert.given_by}</span> <br />
          <span className={styles.date}>
            {monthAbbr[cert.date.month]} {cert.date.year}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CertList;
