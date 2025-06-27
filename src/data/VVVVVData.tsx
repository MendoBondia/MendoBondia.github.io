export const Introduction = (
  <div>
    <h2>Resumen</h2>
    <p>
      El primer proyecto que realize en Unity, un remake del videojuego VVVVV,
      que normalmente se usa como iniciacion en el ámbito del game development
    </p>
    <p>
      Este proyecto fue individual, y realmente el objetivo principal y en lo
      que más me centre fue en aprender todas las bases que me han servido hasta
      ahora.
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
      En este proyecto, que fue el primero que hice, me centré en hacerlo
      eficiente, probando las diferentes herramientas que Unity proporciona,
      tanto a nivel de componentes en los GameObjects, como a nivel de código en
      C#, las extensiones y addons más utilizados, etc.
    </p>
    <p>
      La semana inicial estuve haciendo lo básico: el movimiento del personaje,
      el seguimiento de la cámara, los enemigos, muerte por el entorno, todos
      los elementos principales a nivel de jugabilidad. Una de las principales
      mecánicas del VVVVVV es que tienes la capacidad de cambiar la gravedad, de
      manera que tu personaje pasa a caminar boca abajo por el techo, y es la
      mecánica principal con la que superas los diferentes niveles. La siguiente
      meta a cumplir fue el <b>Cambio de escenas</b>.
    </p>
    <p>
      Primeramente, al poder entrar a cada nivel desde diferentes posiciones a
      raíz del cambio de gravedad, fue algo que tuve que tener en cuenta. Otro
      tema importante fue el de cargar escenas de manera <b>asíncrona</b>, de
      manera que había un momento de transición donde dos escenas estaban
      cargadas a la vez en el mismo espacio para que no se notase el cambio
      entre las dos.
    </p>
    <p>
      Otro aspecto importante que aprendí fue la importancia de la IA de los
      enemigos, donde añadir un factor de aleatoriedad para hacer que sus
      movimientos no sean tan predecibles por parte del jugador es necesario.
      Esto lo apliqué también a una de las salas donde hay trampas en las
      paredes que lanzan proyectiles, y vi que si no haces que el intervalo
      entre flecha y flecha varíe un poco, pasar dos veces por ese nivel se
      vuelve monótono y aburrido.
    </p>
  </div>
);
