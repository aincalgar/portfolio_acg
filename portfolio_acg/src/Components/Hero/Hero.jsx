import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero_title')}</h1>
        <p className={styles.description}>{t('hero_description')}</p>
      </div>
      <img
        src="heroImage.png"
        alt={t('hero_image_alt')}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}