let sechand = document.querySelector(".second");
let hourhand = document.querySelector(".hour");
let minhand = document.querySelector(".minutes");

function sets() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let degs = ((sec / 60) * 360) +0;
  let degm = ((min / 60) * 360) +0;
  let degh = ((hour / 60) * 360) +0;
  sechand.style.transform = `rotate(${degs}deg)`;
  hourhand.style.transform = `rotate(${degm}deg)`;
  minhand.style.transform = `rotate(${degh}deg)`;
}
setInterval(set,0);