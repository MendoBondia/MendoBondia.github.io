import { ProjectInfo} from "../components/ProjectCard.tsx";

const ProjectsData: ProjectInfo[] = [
  {
    title: "Artillerie Lourde",
    image: "/Images/canonBulletShader.png",
    description:
      "Proyecto de simulador 3D de un conflicto naval hecho con compañeros del ITB. Aprendí sobre Shaders y renderizado de objetos 3D.",
    duration: "3 Meses | Unity",
    link: "/ArtillerieLourde",
  },
  {
    title: "Rogue Island",
    image: "/Images/nivelRogueLike.PNG",
    description:
      "RogueLike 2D donde aprendí máquinas de estados, eventos, generación procedural, y cargas asíncronas.",
    duration: "2 Meses | Unity",
    link: "/RogueIsland",
  },
  {
    title: "VVVVV",
    image: "/Images/finalVVVVV.PNG",
    description:
      "Versión reducida del videojuego VVVVV, proyecto escolar que me enseñó las bases del desarrollo de videojuegos.",
    duration: "5 Semanas | Unity",
    link: "/VVVVV",
  },
  
];

export default ProjectsData;
