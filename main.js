const hero = document.querySelector("#hero");
let contadorClicks = 0;
let estadoOriginal = null;

hero.addEventListener("click", () => {
  contadorClicks++;
  if (contadorClicks === 1) {
    hero.classList.add("face-right");
  } else if (contadorClicks === 2) {
    hero.classList.remove("face-right");
    hero.classList.add("face-left");
  } else if (contadorClicks === 3) {
    hero.classList.remove("face-left");
    hero.classList.add("face-up");
    estadoOriginal = {
      contador: contadorClicks - 3,
    };
  } else {
    hero.classList.remove("face-up");
    contadorClicks = estadoOriginal.contador;
  }
});
