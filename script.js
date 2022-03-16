function randomize(){
  const random = Math.random() * (100000 - 1) + 1;
  const number = document.getElementById("random").innerHTML = Math.floor(random);
}

document.addEventListener("click", randomize);