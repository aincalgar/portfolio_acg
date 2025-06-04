import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.projectCard}>
      {project?.imageSrc && (
        <img 
          src={`/${project.imageSrc}`} 
          alt={t(`projects.${project?.id}.image_alt`)} 
          className={styles.projectImage} 
        />
      )}
      <h3 className={styles.projectTitle}>{t(`projects.${project?.id}.title`)}</h3>
      <p className={styles.projectDescription}>{t(`projects.${project?.id}.description`)}</p>
      {project?.skills?.length > 0 && (
        <div className={styles.projectSkills}>
          {project.skills.map((skill, skillId) => (
            <span key={skillId} className={styles.skill}>{skill}</span>
          ))}
        </div>
      )}
      {project?.source && (
        <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          {t("projects_source")}
        </a>
      )}
    </div>
  );
};
