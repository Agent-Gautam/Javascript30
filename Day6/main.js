let results = document.querySelector(".results");
let image = document.querySelector(".image");
let input = document.querySelector(".coninp");
let example = document.querySelector(".example")

let endpoint =
  "https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json";
const countriedobj = [];

console.time('fetching data')
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    countriedobj.push(...data);
    input.addEventListener("input", display);
  })
  .catch(error=>results.innerHTML = `<li>${error}</li>`);
  console.timeEnd('fetching data');

function findcountries(find) {
  let regex = new RegExp(find, "gi");
  let filtered = countriedobj.filter((con) => con["country"].match(regex));
  return filtered;
}
function display(event) {
  let inputValue = event.target.value.trim();
  removeall();

  if (inputValue !== "") {
    let filcon = findcountries(inputValue);
    for (let res of filcon) {
      let li = document.createElement("li");
      li.innerHTML = highlight(res["country"],inputValue);
      results.append(li);
      li.addEventListener("click", () => {
        removeall();
        input.value = res["country"];
        let src = res["flag"];
        image.src = src;
      });
    }
  }
}
function highlight(searchresult,input){
  let regex = new RegExp(input,"gi");
  let changedcase = input.charAt(0).toUpperCase() + input.slice(1);
  let replace = searchresult.replace(regex,`<span class="highlight">${changedcase}</span>`)
  return replace;
}
function removeall() {
    image.src = "";
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
}
