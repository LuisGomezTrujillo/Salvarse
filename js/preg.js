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
"¿Qué significa la comunión de los santos?",
"La conexión que tenemos con todos los cristianos, vivos y muertos",
"Un equipo de fútbol formado por niños y niñas",
"Un dinosauro llamado Santo",
"Un álbum de fotos de la iglesia"
);

dos = new preg(
"¿Quiénes forman parte de la comunión de los santos?",
"Todos los cristianos: los que viven, los que están purificándose y los que ya están en el cielo",
"Solo los santos canonizados por la Iglesia",
"Solo los que están en el cielo",
"Los animales de la Biblia"
);

tres = new preg(
"¿Qué hacen los santos en el cielo por nosotros?",
"Nos acompañan, nos animan y rezan por nosotros",
"Juegan al escondite con Dios",
"Nos mandan mensajes de texto",
"No hacen nada, están dormidos"
);

cuatro = new preg(
"¿Por qué estamos más conectados con los santos que con nuestra familia terrenal?",
"Porque ellos ya viven junto a Dios y son nuestra familia en el cielo",
"Porque los santos tienen superpoderes",
"Porque vivimos en la misma ciudad",
"Porque tienen muchas redes sociales"
);

cinco = new preg(
"¿Cómo podemos imaginar la comunión de los santos?",
"Como estar dentro de una red que une a todos los cristianos",
"Como una nave espacial que viaja al espacio",
"Como una gran carrera donde todos compiten",
"Como un videojuego que todos juegan"
);

seis = new preg(
"¿A qué santo se le conoce como el padre de los pobres?",
"San Vicente de Paúl",
"San Francisco de Asís",
"San Ignacio de Loyola",
"San Juan Bosco"
);

siete = new preg(
"¿Qué obra importante fundó San Vicente de Paúl?",
"La Congregación de la Misión (Padres Paúles)",
"La Orden Franciscana",
"La Compañía de Jesús",
"Los Hermanos Maristas"
);

ocho = new preg(
"¿Qué hizo San Vicente de Paúl por los niños abandonados y los enfermos?",
"Les dio ayuda, alimento y cuidado",
"Los llevó a otro país",
"Les enseñó a jugar deportes",
"Les escribió cartas"
);

nueve = new preg(
"¿Con quién fundó San Vicente de Paúl las Hijas de la Caridad?",
"Con Santa Luisa de Marillac",
"Con Santa Teresa de Calcuta",
"Con Santa Catalina Labouré",
"Con Santa Rita"
);

diez = new preg(
"¿Qué valor destacó en toda la vida de San Vicente de Paúl?",
"La caridad y el servicio a los más necesitados",
"La fuerza física",
"El estudio de matemáticas",
"El arte de la música"
);

once = new preg(
"¿En qué año ocurrió la primera aparición de la Virgen a Catalina?",
"1830",
"1806",
"1876",
"1847"
);

doce = new preg(
"¿Qué objeto le indicó la Virgen que se acuñara a Catalina?",
"La Medalla Milagrosa",
"Un reloj de bolsillo",
"Un anillo",
"Una cruz"
);

trece = new preg(
"¿Dónde vivía Catalina cuando recibió la aparición?",
"En la capilla de la Rue du Bac en París",
"En su granja natal en Borgoña",
"En Roma",
"En la Universidad de París"
);

catorce = new preg(
"¿Qué mensaje traía la imagen en la Medalla Milagrosa?",
"Rogad por nosotros que acudimos a ti",
"Amor eterno a todos",
"Haz el bien sin mirar a quién",
"Dios es amor"
);

quince = new preg(
"¿Qué sucedió con el cuerpo de Catalina cuando fue exhumado 57 años después?",
"Se encontró incorrupto",
"Estaba descompuesto",
"Lo habían trasladado a otro país",
"Había desaparecido"
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