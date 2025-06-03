import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutImage from "/assets/aboutImage.png"
import cursorIcon from "/assets/cursorIcon.png"
import serverIcon from "/assets/serverIcon.png"
import wordpressIcon from "/assets/wordpress.png"

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('about_title')}</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt={t('about_image_alt')}
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt={t('frontend_icon_alt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('frontend_title')}</h3>
              <p>{t('frontend_description')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt={t('backend_icon_alt')} />
            <div className={styles.aboutItemText}>
              <h3>{t('backend_title')}</h3>
              <p>{t('backend_description')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={wordpressIcon} alt={t('wordpress_icon_alt')} />
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
