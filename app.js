// //Movement Animation to happen
const cartao = document.querySelector(".cartao");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  cartao.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// //Items
const titulo = document.querySelector(".titulo");
const tenis = document.querySelector(".tenis img");
const comprar = document.querySelector(".comprar");
const descricoes = document.querySelector(".descricoes h3");
const medidas = document.querySelector(".medidas");


// //Animacao entrando
  container.addEventListener("mouseenter", (e) => {
  cartao.style.transition = "none";
  //Popout
  tenis.style.transform = "translateZ(180px) scaleX(-1)";
  titulo.style.transform = "translateZ(130px)";  
  descricoes.style.transform = "translateZ(95px)";
  medidas.style.transform = "translateZ(70px)";
  comprar.style.transform = "translateZ(45px)";
});
//Animação saindo
container.addEventListener("mouseleave", (e) => {
  cartao.style.transition = "all 0.5s ease";
  cartao.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  titulo.style.transform = "translateZ(0px)";
  tenis.style.transform = "translateZ(0px) rotateZ(0deg)";
  descricoes.style.transform = "translateZ(0px)";
  medidas.style.transform = "translateZ(0px)";
  comprar.style.transform = "translateZ(0px)";
});