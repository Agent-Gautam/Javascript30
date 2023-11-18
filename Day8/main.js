let canvas = document.querySelector("#draw");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
console.log(ctx);
ctx.lineWidth = 50;
ctx.lineJoin = "round";
ctx.lineCap = "round";
let [lastX,lastY] = [0,0];
let isdrawing = false;
let hue = 0;

function start(e){
    [lastX,lastY] = [e.offsetX,e.offsetY];
    isdrawing = true;
}
function draw(e){
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    [lastX,lastY] = [e.offsetX,e.offsetY];
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    if(isdrawing === true){
        ctx.stroke();
    }
    hue = (hue+1)%360;
}
function stop(){
    isdrawing = false;
}

canvas.addEventListener("mousedown",start);
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",stop)

