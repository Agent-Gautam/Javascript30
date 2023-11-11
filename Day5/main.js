let panel = document.querySelectorAll(".panel");

panel.forEach(p=>p.addEventListener("click",function(){
    p.classList.toggle("open");
}));
panel.forEach(pan=>addEventListener("mouseout",function(){
    pan.classList.remove("open");
}))