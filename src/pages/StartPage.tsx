import Header from "../components/Header";
import ProjectsTable from "../components/ProjectTable";
import AboutMe from "../components/AboutMe";

export default function StartPage() {
  return (
    <div className="container">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <ProjectsTable />
      </div>
      <div className="container">
        <AboutMe />
      </div>
    </div>
  );
}
