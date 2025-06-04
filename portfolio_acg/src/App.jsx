import styles from "./App.module.css";
import "./i18n"; // Importa la configuración de idiomas
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

function App() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className={styles.App}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
