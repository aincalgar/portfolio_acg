import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import projectsData from "../../Data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projects_title")}</h2>
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
