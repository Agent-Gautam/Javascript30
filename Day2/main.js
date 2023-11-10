let roman = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
let sechand = document.querySelector(".second");
let hourhand = document.querySelector(".hour");
let minhand = document.querySelector(".minutes");
let now = new Date();

function playsecond() {
  
  let sec = now.getSeconds();
  let degs = ((sec / 60) * 360) +0;
  
  sechand.style.transform = `rotate(${degs}deg)`;
}
function playhour(){
  
  let hour = now.getHours();
  let degh = ((hour / 12) * 360) +0;
  hourhand.style.transform = `rotate(${degh}deg)`;
}
function playminute(){

  let min = now.getMinutes();
  let degm = ((min / 60) * 360) +0;
  minhand.style.transform = `rotate(${degm}deg)`;
}
setInterval(playsecond,1000);
setInterval(playhour,1);
setInterval(playminute,1000);

//roman numbers
for(let i = 0; i < 12; i++){
  let r = document.createElement("div");
  
}