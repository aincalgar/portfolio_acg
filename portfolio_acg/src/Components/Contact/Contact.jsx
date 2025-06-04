import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact_title')}</h2>
        <p>{t('contact_description')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="emailIcon.png" alt={t('email_icon_alt')}/>
          <a href="mailto:ainhoacalabuiggarcia@gmail.com">ainhoacalabuiggarcia@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="github.png" alt={t('github_icon_alt')}/>
          <a href="https://github.com/aincalgar">github.com/aincalgar</a>
        </li>
      </ul>
    </footer>
  )
}