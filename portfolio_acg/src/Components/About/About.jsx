import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = ({ theme }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('about_title')}</h2>
      <div className={styles.content}>
        <img
          src="aboutImage.png"
          alt={t('about_image_alt')}
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="cursorIcon.png" alt={t('frontend_icon_alt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('frontend_title')}</h3>
              <p>{t('frontend_description')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="serverIcon.png" alt={t('backend_icon_alt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('backend_title')}</h3>
              <p>{t('backend_description')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="wordpress.png" alt={t('wordpress_icon_alt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('wordpress_title')}</h3>
              <p>{t('wordpress_description')}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
