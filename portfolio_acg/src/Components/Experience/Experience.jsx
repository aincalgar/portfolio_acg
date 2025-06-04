import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experience_title')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={`/${skill.imageSrc}`} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={`/${historyItem.imageSrc}`} alt={`${historyItem.organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${t(`history.${historyItem.role}`)}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${t(`dates.${historyItem.endDate}`)}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{t(`experience_details.${experience}`)}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
