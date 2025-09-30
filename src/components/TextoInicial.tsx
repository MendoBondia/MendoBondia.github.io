import "../styles/style1.css";
import { useSelected } from "../App";
import { useTransition, animated } from "@react-spring/web";
export default function SwapText() {
  const { selectedId } = useSelected();

  const currentItem = (() => {
    switch (selectedId) {
      case "Blender":
        return { key: "Blender", component: <BlenderText /> };
      case "Javascript":
        return { key: "Javascript", component: <JavascriptText /> };
      case "HTML":
        return { key: "HTML", component: <HTMLText /> };
      case "CSS":
        return { key: "CSS", component: <CSSText /> };
      case "React":
        return { key: "React", component: <ReactText /> };
      case "ThreeJs":
        return { key: "ThreeJs", component: <ThreeJsText /> };
      case "CSharp":
        return { key: "CSharp", component: <CSharpText /> };
      case "Git":
        return { key: "Git", component: <GitText /> };
      case "Unity":
        return { key: "Unity", component: <UnityText /> };
      case "MongoDB":
        return { key: "MongoDB", component: <MongoDBText /> };
      case "Github":
        return { key: "Github", component: <GithubText /> };
      case "Typescript":
        return { key: "Typescript", component: <TypescriptText /> };
      default:
        return { key: "Initial", component: <TextoInicial /> };
    }
  })();

  const transitions = useTransition(currentItem, {
    key: currentItem.key,
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    exitBeforeEnter: true,
    config: { tension: 250, friction: 25 },
  });

  return (
    <div className="container">
      {transitions((style, item) => (
        <animated.div style={style}>{item.component}</animated.div>
      ))}
    </div>
  );
}

export function TextoInicial() {
  return (
    <div className="container">
      <p className="title-1">Joan Mendo | Full-stack Developer</p>
      <p className="title-8">Bienvenido a mi portfolio personal.</p>
      <p className="title-8">
        Aquí encontrarás información sobre mis proyectos, conocimientos, y sobre
        mi en general (Proyecto bajo contrucción).
      </p>
    </div>
  );
}

export function BlenderText() {
  return (
    <div className="container">
      <p className="title-1">Blender</p>
      <p className="title-8">
        Tanto en el ambito académico como en el personal todo lo relacionado con
        el diseño 3D me interesa mucho.
      </p>
      <p className="title-8">
        Tengo experiencia en Blender con el modelado de objetos, texturizado,
        rigging y animación. También en generación procedural, Geometry Nodes, y
        efectos visuales mediante Shaders.
      </p>
      <p className="title-8">
        Este escenario ha sido hecho en su totalidad con Blender, como proyecto
        personal para desarrollar mis capcidades y como muestra de mi
        experiencia en el software.
      </p>
    </div>
  );
}

export function JavascriptText() {
  return (
    <div className="container">
      <p className="title-1">Javascript</p>
      <p className="title-8">
        Como base de todo mi conocimiento en desarrollo web, Javascript me
        resulta esencial para poder crear aplicaciones dinámicas.
      </p>
      <p className="title-8">
        Es un lenguaje imprescindible en el desarrollo web moderno, y lo he
        utilizado tanto en el frontend como en el backend.
      </p>
      <p className="title-8">
        Este proyecto ha sido realizado con TypeScript, pero sin la base previa
        de JS me habria sido imposible.
      </p>
    </div>
  );
}
export function HTMLText() {
  return (
    <div className="container">
      <p className="title-1">HTML</p>
      <p className="title-8">
        La base de cualquier desarrollo web comienza con HTML. Es el lenguaje de
        marcado que define la estructura de una página y permite organizar el
        contenido a niivel estructural.
      </p>
      <p className="title-8">
        Tengo experiencia trabajando con etiquetas modernas de HTML5,
        enfocándome en buenas prácticas y accesibilidad para crear aplicaciones
        más eficientes.
      </p>
      <p className="title-8">
        Siempre procuro que mi código HTML sea limpio, organizado y fácil de
        mantener.
      </p>
    </div>
  );
}

export function CSSText() {
  return (
    <div className="container">
      <p className="title-1">CSS</p>
      <p className="title-8">
        CSS es esencial para dar estilo a cualquier proyecto web.
      </p>
      <p className="title-8">
        Tengo experiencia con Flexbox, Grid y frameworks como TailwindCSS para
        agilizar el desarrollo y mantener una estética moderna.
      </p>
      <p className="title-8">
        La combinación de diseño atractivo y rendimiento es mi objetivo al
        trabajar con CSS, intentar evitar redundancias y repeticiones
        manteniendo los visuales de la pagina.
      </p>
    </div>
  );
}

export function ReactText() {
  return (
    <div className="container">
      <p className="title-1">React</p>
      <p className="title-8">
        React es una de mis herramientas favoritas para el desarrollo frontend,
        ya que permite crear interfaces de usuario dinámicas y reutilizables.
      </p>
      <p className="title-8">
        He trabajado con componentes, hooks, context API y librerías del
        ecosistema de React como React Router o React Three Fiber (R3F).
      </p>
      <p className="title-8">
        Me gusta la modularidad y escalabilidad que React ofrece para proyectos
        de cualquier tamaño, junto a la cantidad de librerias que hay para React
        y toda la comunidad que tiene detras.
      </p>
    </div>
  );
}

export function ThreeJsText() {
  return (
    <div className="container">
      <p className="title-1">ThreeJs</p>
      <p className="title-8">
        Three.js es una librería de JavaScript que me permite llevar el 3D al
        navegador de forma interactiva.
      </p>
      <p className="title-8">
        He trabajado con escenas, luces, materiales y shaders, creando entornos
        en tiempo real que combinan creatividad y programación.
      </p>
      <p className="title-8">
        Me parece muy interesante combinar el diseño 3D de Blender con Three.js
        para crear experiencias inmersivas. Usando React Three Fiber para
        integrar Three.js con React, he podido crear este portfolio y su
        integracion de 2D y 3D.
      </p>
    </div>
  );
}

export function CSharpText() {
  return (
    <div className="container">
      <p className="title-1">C#</p>
      <p className="title-8">
        C# ha sido una de las bases de mi experiencia en desarrollo,
        especialmente en el entorno de Unity.
      </p>
      <p className="title-8">
        He utilizado el lenguaje para programar lógicas de juego, sistemas de
        interacción, inteligencia artificial básica y gestión de físicas.
      </p>
      <p className="title-8">
        Es un lenguaje versátil que al estar orientado a objetos encuentro muy
        util en el desarrollo de videojuegos.
      </p>
    </div>
  );
}

export function GitText() {
  return (
    <div className="container">
      <p className="title-1">Git</p>
      <p className="title-8">
        Git es una herramienta fundamental en mi flujo de trabajo, ya que me
        permite llevar control de versiones y colaborar con otros
        desarrolladores.
      </p>
      <p className="title-8">
        Manejo ramas, merges y pull requests, siguiendo buenas prácticas de
        control de cambios.
      </p>
      <p className="title-8">
        Con Git puedo mantener la organización y seguridad del código en
        cualquier proyecto, es una herramiente esencial y obligatoria.
      </p>
    </div>
  );
}

export function UnityText() {
  return (
    <div className="container">
      <p className="title-1">Unity</p>
      <p className="title-8">
        Unity es el motor en el que he desarrollado proyectos de videojuegos y
        experiencias interactivas, y de mis estudios es en lo que mas me he
        enfocado a aprender.
      </p>
      <p className="title-8">
        Tengo experiencia en programación de mecánicas, sistemas de físicas,
        animaciones y optimización de escenas 3D. También he trabajado con la
        Universal Render Pipeline (URP) para mejorar la calidad visual. Tengo
        proyectos tanto en 2D como en 3D, con sistemas de multijugador, y
        creando proyectos grupales.
      </p>
      <p className="title-8">
        La combinación de Unity y C# me ha permitido llevar ideas a prototipos
        jugables y proyectos completos y es en lo que mas me he enfocado a
        aprender.
      </p>
    </div>
  );
}

export function MongoDBText() {
  return (
    <div className="container">
      <p className="title-1">MongoDB</p>
      <p className="title-8">
        MongoDB es una base de datos NoSQL con la que he trabajado en proyectos
        backend, aprovechando su flexibilidad con documentos JSON.
      </p>
      <p className="title-8">
        He desarrollado APIs en mis estudios que interactúan con MongoDB,
        permitiendo almacenar y consultar información de manera eficiente.
      </p>
      <p className="title-8">
        Es ideal para proyectos dinámicos donde los esquemas de datos pueden
        cambiar con rapidez.
      </p>
    </div>
  );
}

export function GithubText() {
  return (
    <div className="container">
      <p className="title-1">GitHub</p>
      <p className="title-8">
        GitHub es la plataforma donde organizo y publico mis proyectos,
        facilitando la colaboración y el trabajo en equipo.
      </p>
      <p className="title-8">
        Manejo issues, proyectos, wikis y CI/CD mediante GitHub Actions.
      </p>
      <p className="title-8">
        Es también mi portfolio de código abierto, donde muestro mis avances y
        aprendizajes.
      </p>
    </div>
  );
}

export function TypescriptText() {
  return (
    <div className="container">
      <p className="title-1">TypeScript</p>
      <p className="title-8">
        TypeScript es un superset de JavaScript que me ayuda a escribir código
        más seguro y escalable, gracias al tipado estático.
      </p>
      <p className="title-8">
        Lo utilizo en la mayoría de mis proyectos, tanto en frontend como en
        backend, ya que reduce errores y mejora la productividad.
      </p>
      <p className="title-8">
        La combinación de React y TypeScript me permite crear aplicaciones
        robustas y mantenibles como esta.
      </p>
    </div>
  );
}
