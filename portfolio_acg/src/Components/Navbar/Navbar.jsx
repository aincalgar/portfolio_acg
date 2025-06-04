import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

export const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.navItems}>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={menuOpen ? "closeIcon.png" : "menuIcon.png"}
            alt={t('menu_icon_alt')}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#about">{t("navbar_about")}</a></li>
            <li><a href="#experience">{t("navbar_experience")}</a></li>
            <li><a href="#projects">{t("navbar_projects")}</a></li>
            <li><a href="#contact">{t("navbar_contact")}</a></li>
          </ul>
        </div>

        <div className={styles.languageButtons}>
          <button onClick={() => i18n.changeLanguage("es")}>
            <img src="/banderas/es.png" alt="Español" />
          </button>
          <button onClick={() => i18n.changeLanguage("en")}>
            <img src="/banderas/en.jpeg" alt="English" />
          </button>
          <button onClick={() => i18n.changeLanguage("va")}>
            <img src="/banderas/va.png" alt="Valencià" />
          </button>
          <button onClick={() => i18n.changeLanguage("it")}>
            <img src="/banderas/it.png" alt="Italiano" />
          </button>
        </div>

        <button className={styles.themeButton} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  )
}