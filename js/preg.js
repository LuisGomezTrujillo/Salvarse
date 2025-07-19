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
  "¿Qué es la comunión de los santos?",
  "La unión de todos los cristianos, vivos y muertos",
  "Un equipo de fútbol de niños y niñas",
  "Un dinosaurio llamado Santo",
  "Un álbum de fotos de la iglesia"
);

dos = new preg(
  "¿Quiénes están en la comunión de los santos?",
  "Todos los cristianos: vivos, en el cielo y en purificación",
  "Solo los santos reconocidos por la Iglesia",
  "Solo los que están en el cielo",
  "Los animales de la Biblia"
);

tres = new preg(
  "¿Qué hacen los santos por nosotros?",
  "Nos cuidan, nos ayudan y rezan por nosotros",
  "Juegan al escondite con Dios",
  "Nos mandan mensajes de texto",
  "Duermen todo el día"
);

cuatro = new preg(
  "¿Por qué los santos son más cercanos que algunos familiares?",
  "Porque viven con Dios y son nuestra familia del cielo",
  "Porque tienen superpoderes",
  "Porque viven en la misma ciudad",
  "Porque tienen muchas redes sociales"
);

cinco = new preg(
  "¿Cómo imaginar la comunión de los santos?",
  "Como una red que une a todos los cristianos",
  "Como una nave espacial viajando",
  "Como una carrera de competencia",
  "Como un videojuego de muchos jugadores"
);

seis = new preg(
  "¿Quién es llamado el padre de los pobres?",
  "San Vicente de Paúl",
  "San Francisco de Asís",
  "San Ignacio de Loyola",
  "San Juan Bosco"
);

siete = new preg(
  "¿Qué fundó San Vicente de Paúl?",
  "La Congregación de la Misión (Padres Paúles)",
  "La Orden Franciscana",
  "La Compañía de Jesús",
  "Los Hermanos Maristas"
);

ocho = new preg(
  "¿Qué hizo San Vicente por los niños y enfermos?",
  "Les dio comida, ayuda y cuidado",
  "Los llevó a otro país",
  "Les enseñó a jugar deportes",
  "Les escribió cartas"
);

nueve = new preg(
  "¿Con quién creó San Vicente las Hijas de la Caridad?",
  "Con Santa Luisa de Marillac",
  "Con Santa Teresa de Calcuta",
  "Con Santa Catalina Labouré",
  "Con Santa Rita"
);

diez = new preg(
  "¿Qué valor vivió siempre San Vicente de Paúl?",
  "La caridad y ayudar a los pobres",
  "La fuerza física",
  "El estudio de matemáticas",
  "El arte de la música"
);

once = new preg(
  "¿Cuándo fue la primera aparición de la Virgen a Catalina?",
  "En 1830",
  "En 1806",
  "En 1876",
  "En 1847"
);

doce = new preg(
  "¿Qué le pidió la Virgen a Catalina que hiciera?",
  "La Medalla Milagrosa",
  "Un reloj de bolsillo",
  "Un anillo",
  "Una cruz"
);

trece = new preg(
  "¿Dónde estaba Catalina cuando vio a la Virgen?",
  "En la capilla de la Rue du Bac, París",
  "En su granja en Borgoña",
  "En Roma",
  "En la Universidad de París"
);

catorce = new preg(
  "¿Qué dice la Medalla Milagrosa?",
  "Ruega por nosotros que recurrimos a ti",
  "Amor eterno a todos",
  "Haz el bien sin mirar a quién",
  "Dios es amor"
);

quince = new preg(
  "¿Qué pasó con el cuerpo de Catalina después de 57 años?",
  "Estaba incorrupto (no se descompuso)",
  "Estaba descompuesto",
  "Lo llevaron a otro país",
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