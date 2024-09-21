class preg {
  constructor(p, resp, op1, op2, op3) {
    this.p = p;
    this.resp = resp;
    this.op1 = op1;
    this.op2 = op2;
    this.op3 = op3;
  }

  op() {
    return [this.resp, this.op1, this.op2, this.op3].sort(
      (a, b) => Math.random() - 0.5
    );
  }
}

uno = new preg(
  "¿Cuántos son los mandamientos de la Ley de Dios?",
  "10",
  "7",
  "12",
  "3"
);
dos = new preg(
  "¿Cómo se llama el primer sacramento que recibimos?",
  "El Bautismo",
  "La Confirmación",
  "La Eucaristía",
  "El Matrimonio"
);
tres = new preg(
  "¿En qué día celebramos la resurrección de Jesús?",
  "El Domingo",
  "El Lunes",
  "El Viernes",
  "El Sábado"
);
cuatro = new preg(
  "¿Quién nos enseñó el Padre Nuestro?",
  "Jesús",
  "Moisés",
  "Pedro",
  "San Pablo"
);
cinco = new preg(
  "¿Cuántas personas hay en la Santísima Trinidad?",
  "3",
  "1",
  "2",
  "4"
);
seis = new preg(
  "¿Cuál es el primer mandamiento?",
  "Amarás a Dios sobre todas las cosas",
  "No matarás",
  "Honrarás a tu padre y a tu madre",
  "No robarás"
);
siete = new preg(
  "¿Qué recibimos en la primera comunión?",
  "El Cuerpo y la Sangre de Cristo",
  "Un regalo",
  "Una bendición",
  "Una medalla"
);
ocho = new preg(
  "¿Cuál es el nombre de la oración que rezamos para pedir perdón a Dios?",
  "El Acto de Contrición",
  "El Ave María",
  "El Credo",
  "El Padre Nuestro"
);
nueve = new preg(
  "¿Cuántas bienaventuranzas enseñó Jesús?",
  "8",
  "5",
  "10",
  "12"
);

diez = new preg("¿Cuántos libros tiene la Biblia?", "73", "66", "50", "100");

once = new preg(
  "¿Qué significa 'católico'?",
  "Universal",
  "Divino",
  "Sagrado",
  "Santo"
);
doce = new preg(
  "¿Cómo se llama la madre de Jesús?",
  "María",
  "Marta",
  "Isabel",
  "Ana"
);
trece = new preg(
  "¿Cuál es el segundo mandamiento?",
  "No tomarás el nombre de Dios en vano",
  "No mentirás",
  "No robarás",
  "Amarás a tu prójimo como a ti mismo"
);
catorce = new preg(
  "¿Cuál de estos sacramentos es para el perdón de los pecados?",
  "La Confesión o Penitencia",
  "La Confirmación",
  "El Matrimonio",
  "El Bautismo"
);
quince = new preg(
  "¿Cómo se llama el libro que contiene la Palabra de Dios?",
  "La Biblia",
  "El Catecismo",
  "El Misal",
  "El Rosario"
);

const preguntas = [
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
  diez,
  once,
  doce,
  trece,
  catorce,
  quince,
].sort((a, b) => Math.random() - 0.5);

//Funciones necesarias para el juego
function aparecer_ventana() {
  //ventana de comoddines y mensajes
  ventana.style.transform = "scale(1)";
  document.getElementById(identificacion).style.display = "block";
  clearInterval(intrv);
}

btn_comodin.onclick = () => {
  ventana.style.transform = "scale(0)";
  document.getElementById(identificacion).style.display = "none";

  if (identificacion == "resp_correcta") {
    cambiar_pregunta(preguntas[nivel].p, preguntas[nivel].op());
  }
  temporizador();
};

function cambiar_pregunta(p, r) {
  //funcion para cambiar la pregunta p=pregunta r=array con las respuestas
  pregunta.innerText = p;

  for (var i = 0; i < 4; i++) {
    respuestas[i].innerText = r[i];
  }

  cont_tiempo = 31;
}

function felicidades() {
  //Mensaje Ganador
  ventana2.style.transform = "scale(1)";
  victoria.style.display = "inline-block";
  ganado.innerText = ganado.innerText + " " + dinero_ganado;
}

function perder() {
  //Mensaje Perdedor
  if (sonar) {
    intro.muted = true;
    m_perdiste.play();
  }
  ventana2.style.transform = "scale(1)";
  clearInterval(intrv);
  victoria.innerHTML = "¡Haz perdido! Intenta nuevamente";
  victoria.style.display = "inline-block";
  document
    .getElementById("img_vent")
    .setAttribute("src", "medios/img/perder.jpg");
  ganado.innerText = ganado.innerText + " " + dinero_ganado;
}

//Cambio y corrección de las preguntas del juego
//Además, por cada pregunta correcta se acumula una recompenza
cambiar_pregunta(preguntas[nivel].p, preguntas[nivel].op());

for (let i = 0; i < respuestas.length; i++) {
  resp[i].onclick = () => {
    if (respuestas[i].innerText == preguntas[nivel].resp) {
      identificacion = "resp_correcta";
      if (sonar) m_correcto.play();
      nivel++;
      pasaste.innerText = "Pasaste al nivel:" + (nivel + 1);
      aparecer_ventana();
      recompenza = recompenza + 10000 * nivel;

      if (nivel > preguntas.length - 1) {
        dinero_ganado = recompenza;
        felicidades();
      } else {
        if (nivel % 5 == 0) {
          dinero_ganado = recompenza; //cada vez supera un nivel (5preguntas)
          dinero.innerText = dinero_ganado;
        }
      }
    } else perder();
  };
}

//Comodines de ayuda a la resolución de las preguntas

cont_comodin.addEventListener("click", (e) => {
  if (e.target.classList.contains("comodines")) {
    e.target.style.backgroundColor = "gray";
  }

  if ((amigo == false) & e.target.classList.contains("icon-phone")) {
    amigo = true;
    identificacion = "llamar";
    aparecer_ventana();
    document.getElementById("correcto").innerText = preguntas[nivel].resp;
  } else if ((publico == false) & e.target.classList.contains("icon-users")) {
    publico = true;
    identificacion = "audiencia";
    aparecer_ventana();
    for (var i = 0; i < 4; i++) {
      if (respuestas[i].innerText == preguntas[nivel].resp)
        barra[i].value = "70";
    }
  } else if ((mitad == false) & e.target.classList.contains("mitad")) {
    mitad = true;
    let aux1 = 0;
    for (var i = 0; (i < 4) & (aux1 < 2); i++) {
      if (respuestas[i].innerText != preguntas[nivel].resp) {
        aux1++;
        respuestas[i].innerText = "";
      }
    }
  }
});

//Botones para rendirse o terminar el juego
rendirse.onclick = () => {
  ventana2.style.transform = "scale(1)";
  ganado.innerText = ganado.innerText + " " + dinero_ganado;
};

terminar.onclick = () => {
  //Una vez termina el juego se recarga la pagina y vuelve al inicio
  location.reload();
};
