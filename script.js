const min = Number(prompt("Escolha o número mínimo"))
const max = Number(prompt("Escolha o número máximo"))

console.log(min)
function randomize(){
  const random = Math.random() * (max - min) + min;
  const number = document.getElementById("random").innerHTML = Math.floor(random);
}

document.addEventListener("click", randomize);