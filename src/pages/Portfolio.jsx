import { useState } from "react";
import { Fragment } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects";

function Portfolio() {
  return (
    <>
      {console.log(projects)}
      {projects.map((project) => (
      
        <ProjectCard 
            key={project.key}
            title={project.title}
            image={project.image}
            alt={project.alt}
            gitHubUrl={project.gitHubUrl}
            deployedUrl={project.deployedUrl}
        />
      ))}
    </>
  );
}

export default Portfolio;
