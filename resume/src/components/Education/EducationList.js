import React from "react";
import styles from "./education.module.css";

const EducationList = ({ education }) => {
  return (
    <div className={styles.educationList}>
      <h1 className="sectionTitle">Education</h1>
      {education.map((edu, index) => (
        <div key={index} className={styles.educationItem}>
          <strong>{edu.school}</strong> <br />
          <span className={styles.degreeType}>
            {edu.degree_type}:
          </span>
          <br />
          <span className={styles.degree}>
            {edu.degree}
          </span>
          <br />
          <span className={styles.date}>
            {edu.graduation_date.month} {edu.graduation_date.year}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EducationList;
