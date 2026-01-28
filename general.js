

const vezeteknevek = [
  "Nagy", "Kovács", "Tóth", "Szabó", "Horváth",
  "Varga", "Kiss", "Molnár", "Németh", "Farkas"
];

const keresztnevek = [
  "Péter", "Anna", "László", "Éva", "Gábor",
  "Zsófia", "Tamás", "Judit", "Balázs", "Katalin"
];

function randomElem(tomb) {
  return tomb[Math.floor(Math.random() * tomb.length)];
}

function randomVernyomas() {
  const szisztoles = Math.floor(Math.random() * (160 - 90 + 1)) + 90;
  const diasztoles = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  return `${szisztoles}/${diasztoles}`;
}


