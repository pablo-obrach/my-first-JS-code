const hero = document.querySelector("#hero");
let contadorClicks = 0;
let estadoOriginal = null;

hero.addEventListener("click", () => {
  contadorClicks++;
  if (contadorClicks === 1) {
    hero.classList.toggle("face-right");
  } else if (contadorClicks === 2) {
    hero.classList.toggle("face-up");
  } else if (contadorClicks === 3) {
    hero.classList.toggle("face-left");
    estadoOriginal = {
      contador: contadorClicks - 3,
    };
  } else {
    hero.classList.remove("face-left", "face-up", "face-right");
    contadorClicks = estadoOriginal.contador;
  }
});

//ESTE FUE EL PRIMER METODO QUE SE ME OCURRIO LUEGO LO OPTIMICÉ
// hero.addEventListener("click", () => {
//   contadorClicks++;
//   if (contadorClicks === 1) {
//     hero.classList.add("face-right");
//   } else if (contadorClicks === 2) {
//     hero.classList.remove("face-right");
//     hero.classList.add("face-up");
//   } else if (contadorClicks === 3) {
//     hero.classList.remove("face-up");
//     hero.classList.add("face-left");
//     estadoOriginal = {
//       contador: contadorClicks - 3,
//     };
//   } else {
//     hero.classList.remove("face-left");
//     contadorClicks = estadoOriginal.contador;
//   }
// });
