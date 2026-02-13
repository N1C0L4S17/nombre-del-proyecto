const inicio = new Date("2025-12-24T00:00:00");

function actualizarContador(){
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const segundos = Math.floor(diferencia / 1000) % 60;
  const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
  const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById("tiempo").textContent =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// aparición progresiva del texto
const frases = document.querySelectorAll(".fade");
const corazon = document.querySelector(".hidden");

frases.forEach((frase, i) => {
  setTimeout(() => {
    frase.classList.add("show");
  }, 3000 * i);
});

const audio = document.getElementById("musica");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  audio.play();
  startScreen.style.display = "none";
});

function lluviaSnoopys(){
  const contenedor = document.getElementById("snoopys-bg");

  const imagenes = [
    "S1.png","S2.png","Snoopy-Holding-Woodstock-PNG-HD-Quality.png","pngegg.png"
  ];

  // cantidad según tamaño de pantalla
  const cantidad = Math.floor((window.innerWidth * window.innerHeight) / 15000);

  for(let i=0; i<cantidad; i++){
    const img = document.createElement("img");
    img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
    img.className = "snoopy-bg";

    img.style.left = Math.random() * 100 + "vw";
    img.style.top = Math.random() * 100 + "vh";

    // tamaños variados para más estilo
    const size = 50 + Math.random() * 40;
    img.style.width = size + "px";

    // tiempos distintos para que no se muevan igual
    img.style.animationDuration = (4 + Math.random() * 6) + "s";

    contenedor.appendChild(img);
  }
}

lluviaSnoopys();




