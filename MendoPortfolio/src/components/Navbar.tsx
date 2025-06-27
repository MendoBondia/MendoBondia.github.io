import "/src/css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul className="nav-left">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#aboutMe">Sobre mí</a>
        </li>
        <li>
          <a href="/archivosPDF/JoanMendoCV.pdf" download="JoanMendoCV.pdf">
            Descargar CV
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <a href="mailto:joanmendo05@gmail.com">
          <img src="/Images/iconoMail.png" alt="Email" />
        </a>
        <a href="https://github.com/MendoBondia" target="_blank">
          <img src="/Images/iconoGithub.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/joan-mendo-david-34b427296/"
          target="_blank"
        >
          <img src="/Images/iconoLinkedIn.png" alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}
