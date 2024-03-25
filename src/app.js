/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let culpable = [
  "Mi perro",
  "Mi amiga Catalina",
  "El abuelo Basilio",
  "Una amiga de mi madre"
];
let accion = ["tiró el café en", "me robó", "hizo pis en", "rompió"];
let queHizo = [
  "todo el trabajo que hice",
  "mi iPhone 14",
  "mi portátil",
  "mi coche"
];
let cuandoLoHizo = [
  "justo cuando estaba a punto de salir para clase",
  "mientras yo estaba en el baño",
  "mientras yo estaba comiendo",
  "cuando yo no miraba",
  "antes de que yo llegase"
];
window.onload = function() {
  let culpableRandom = Math.floor(Math.random() * culpable.length);
  let accionRandom = Math.floor(Math.random() * accion.length);
  let queHizoRandom = Math.floor(Math.random() * queHizo.length);
  let cuandoRandom = Math.floor(Math.random() * cuandoLoHizo.length);
  let excusa =
    culpable[culpableRandom] +
    " " +
    accion[accionRandom] +
    " " +
    queHizo[queHizoRandom] +
    " " +
    cuandoLoHizo[cuandoRandom];
  document.getElementById("excuse").innerHTML = excusa;
  console.log("Hola consola, soy María!");
};
