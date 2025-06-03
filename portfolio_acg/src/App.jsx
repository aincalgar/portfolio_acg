import styles from "./App.module.css";
import "./i18n"; // Importa la configuración de idiomas
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

    
    </div>
  );
}

export default App;
