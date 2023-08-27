let butao = document.querySelector(".nao");
let randomNumberTop = 0;
let randomNumberLeft = 0;

butao.addEventListener("mouseenter", ()=>{
   const maxX = window.innerWidth - butao.offsetWidth;
   const maxY = window.innerHeight - butao.offsetHeight;


   let mathRandomX = Math.random() * maxX;
   let mathRandomY = Math.random() * maxY;


   butao.style.right = mathRandomX + "px";
   butao.style.bottom = mathRandomY + "px";
   butao.style.position = "absolute";
   
})

