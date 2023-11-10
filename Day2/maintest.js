let labels = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];

let clock = document.querySelector(".clock");
let sechand = document.querySelector(".second");
let hourhand = document.querySelector(".hour");
let minhand = document.querySelector(".minutes");
let now = new Date();

//showing roman labels
// for(let roman of labels){
//     let romandiv = document.createElement("div");
//     romandiv.classList.add("roman");
//     romandiv.style.transform = "rotate(45deg)"
//     clock.append(romandiv);
// }

let sec = now.getSeconds();
let min = now.getMinutes();
let hour = now.getHours();

let degs = ((sec/60)*360);
let degm = ((min/60)*360);
let degh = ((hour/12)*360);

sechand.style.transform = `rotate(${degs}deg)`;
minhand.style.transform = `rotate(${degm}deg)`;
hourhand.style.transform = `rotate(${degh}deg)`;

function hourshow(){
    sechand.style.display = "block";
    hourhand.style.display = "block";
    minhand.style.display = "block";
    degs=degs+6;
    degm = degm + 0.1;
    degh = degh + 0.008333333333333;
    sechand.style.transform = `rotate(${degs}deg)`;
    minhand.style.transform = `rotate(${degm}deg)`;
    hourhand.style.transform = `rotate(${degh}deg)`;
}
setInterval(hourshow,1000);