export const Introduction = (
  <div>
    <h2>Resumen</h2>
    <p>
      Rogue Island fue un proyecto donde tuvimos que programar todos los
      aspectos de un RogueLike clásico, donde cada vez que mueres has de volver
      a empezar.
    </p>
    <p>
      Este proyecto fue individual, por lo que me encargué tanto del apartado
      visual como de la programación de todas las mecánicas, teniendo en cuenta
      que algunos de los assets de los sprites fueron descargados de Itch.io.
    </p>
    <p>
      Aprendí cómo funciona la iluminación de URP en Unity 2D, sistemas de
      partículas, patrones de diseño a nivel de código, entre otras cosas.
    </p>
  </div>
);

export const Tecnologies = (
  <div>
    <h2>Tecnologías Usadas</h2>
    <ul>
      <li>
        <a>Unity (URP)</a>
      </li>
      <li>
        <a>Aseprite</a>
      </li>
      <li>
        <a>GitHub</a>
      </li>
      <li>
        <a>C#</a>
      </li>
      <li>
        <a>ProofHub</a>
      </li>
    </ul>
  </div>
);

export const Learnings = (
  <div>
    <h2>Aprendizajes</h2>
    <p>
      En este proyecto, que fue el primero que hice a esta escala a nivel de
      contenido, me centré en hacerlo de la manera más <b>modular</b> posible,
      de manera que mientras iba adquiriendo nuevos conocimientos, podía
      implementarlos en el proyecto sin perder parte del desarrollo ya
      existente.
    </p>
    <p>
      El primer concepto a implementar dentro de este proyecto fue lo que se
      conoce como <b>Blend Tree</b>, que consiste en conectar una serie de
      animaciones, y que se pueda transicionar de una a la otra de manera
      gradual. Esto significa que en vez de pasar de la animación de caminar a
      la de correr directamente, hay una transición automática entre ambas
      animaciones.
    </p>
    <p>
      Una vez implementado el blend tree, el siguiente concepto en el que me
      puse a trabajar fue en la generación <b>procedural</b> del terreno. Al ser
      un juego de género Roguelike, uno de los conceptos más importantes a nivel
      de jugabilidad es que cada partida ha de ser diferente a la anterior, cada
      iteración ha de tener elementos que se modifiquen aleatoriamente. Al ser
      un juego 2D con un estilo pixel art, el terreno se genera en base a un{" "}
      <b>Tilemap</b>.
    </p>
    <p>
      Esta generación se basó en un sistema recursivo donde, cada "Tile", cada
      casilla del mapa, miraba sus propiedades y las de las casillas de su
      alrededor, y en base a eso pintaba cada casilla con un sprite u otro. Para
      lograrlo, después de una semana y casi 600 líneas de código, revisaba
      diferentes condicionales, como la longitud y altura del mapa, si la
      casilla estaba en contacto con el océano, si era una zona donde podían
      aparecer enemigos y obstáculos, el tipo de terreno, etc.
    </p>
    <p>
      Después de todo esto, y de expandir la generación procedural con
      diferentes biomas y decoraciones, me centré en la creación de diversas{" "}
      <b>Máquinas de estado</b>.
    </p>
    <p>
      Una Finite State Machine (FSM) es un patrón de diseño que puedes usar a la
      hora de definir el comportamiento de un objeto. El principio principal de
      este es que el objeto estará siempre en un estado y ejecutará unos métodos
      cada frame en base a ese estado, y cada vez que cambie a uno nuevo, se
      ejecutará lógica adicional en ese frame. Tras investigarlo durante
      aproximadamente una semana, acabé encontrando la que creo que es la manera
      más óptima de usar una FSM en Unity, que es usando{" "}
      <b>Scriptable Objects</b>.
    </p>
    <p>
      De manera rápida, un Scriptable Object (SO) se utiliza para guardar
      información. Como una variable en cualquier lenguaje de programación, un
      SO permite guardar información sin tener que tener un objeto en la escena,
      y usar esto para crear los diferentes estados permite que sean los propios
      estados los que definan hacia qué otros estados pueden pasar, lo que es
      con diferencia la manera más <b>modular y escalable</b> que encontré para
      hacer una FSM.
    </p>
  </div>
);
