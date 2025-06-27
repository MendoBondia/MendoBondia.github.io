import ProjectCard from "./ProjectCard.tsx";
import ProjectsData from "../data/ProjectsData.ts";
import "/src/css/ProjectTable.css";

export default function ProjectsScreen() {
  return (
    <section className="projects" id="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {ProjectsData.map((project) => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </div>
    </section>
  );
}
