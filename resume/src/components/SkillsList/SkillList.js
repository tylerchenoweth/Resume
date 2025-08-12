import styles from "./skills.module.css";

const SkillList = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => (
        <div className={styles.SkillBlock} key={index}>
          <h2 className="sectionTitle">{skill.title}</h2>

          <ul className={styles.bullets}>
            {skill.list.map((bullet, i) => (
              <li className={styles.bullet} key={i}>
                {bullet}
              </li>
            ))}
          </ul>
          <br />
        </div>
      ))}
    </>
  );
};

export default SkillList;
