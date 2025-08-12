import styles from "./Experience.module.css";

const Experience = ({ json_payload }) => {
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

  return (
    <>
      <div className={styles.row}>
        <h2 className={`${styles.rowLeft} ${styles.rowElement}`}>
          {json_payload.company_name}
        </h2>
        <p className={`${styles.rowRight} ${styles.rowElement}`}>
          {monthAbbr[json_payload.start_date.month]}&nbsp;
          {json_payload.start_date.year}
          &nbsp;-&nbsp;
          {json_payload.end_date.year === 0
            ? "Present"
            : `${monthAbbr[json_payload.end_date.month]} ${json_payload.end_date.year}`}
        </p>
      </div>

      <div className={styles.row}>
        <p className={`${styles.rowLeft} ${styles.rowElement}`}>
          {json_payload.position}
        </p>
        <p className={`${styles.rowRight} ${styles.rowElement}`}>
          {json_payload.location.city}, {json_payload.location.state}
        </p>
      </div>

      <ul className={styles.bullets}>
        {json_payload.job_bullets.map((bullet, index) => (
          <li className={styles.bullet} key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Experience;
