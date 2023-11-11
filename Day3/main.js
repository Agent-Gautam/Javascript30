//elements
let box = document.querySelector(".box");
let code = document.querySelector("#code");
let input = document.querySelectorAll("input");
let copy = document.querySelector("#copy");

//take the inputs from selection
//changes css var of box
//write code to code

function select() {
  let value = this.value;
  let name = this.name;
  let units = this.dataset.sizing;
  document.documentElement.style.setProperty(`--${name}`, `${value}${units}`);
  let updatecode = document.querySelector(`.${name}`);
  updatecode.innerHTML = value + units;
}
input.forEach((input) => {
  input.addEventListener("input", select);
  input.addEventListener("change", select);
});

//implementing copy button
copy.addEventListener("click",function(){
    let text = code.textContent;
    navigator.clipboard.writeText(text);
})