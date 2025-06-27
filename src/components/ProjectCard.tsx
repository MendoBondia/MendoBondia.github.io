export interface ProjectInfo {
  title: string;
  image: string;
  description: string;
  duration: string;
  link: string;
}

import { Link } from "react-router-dom";
export default function ProjectCard({
  title,
  image,
  description,
  duration,
  link,
}: ProjectInfo) {
  return (
    <Link to={link} className="project">
      <div className="project-image">
        <img src={image} alt={`Proyecto ${title}`} />
        <div className="overlay">
          <p>
            <b>{duration}</b>
          </p>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
