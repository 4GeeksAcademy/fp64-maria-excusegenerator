/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function main(){
  const who = getGuilty();
  const action = getAction();
  const target = getTarget();
  const when = getWhen();
  const message = getMessage(who, action, target, when);
  printMessage(message);
}
const getRandomElement = (array) =>{
  const randomIndex = Math.floor(Math.random() * array.length); 
  return array[randomIndex];
}
const getGuilty = () => {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  return getRandomElement(who);
}
const getAction = () => {
  const action = ['ate', 'peed', 'crushed', 'broke'];
  return getRandomElement(action); 
}
const getTarget = () => {
  const target = ['my homework', 'my phone', 'the car'];
  return getRandomElement(target); 
}
const getWhen = () => {
  const when = ['yesterday', 'last night', 'this morning'];
  return getRandomElement(when); 
}
const getMessage = (who, action, target, when) =>{
  return `${who} ${action} ${target} ${when}`;
}
const printMessage = (message) => {
  console.log(message);
}
main();
