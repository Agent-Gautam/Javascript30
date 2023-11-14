let results = document.querySelector(".results");
let image = document.querySelector(".image");
let input = document.querySelector(".coninp");

let endpoint = "https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json";
const countriedobj = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => {countriedobj.push(...data);
    });

function findcountries(find){
    let countryname = countriedobj.map(con=>con["country"]);
    let regex = new RegExp(find,"gi");
    let filtered = countryname.filter(con=>con.match(regex));
    return filtered;
}
function display(){
    let filcon = findcountries(this.value);
    // console.log(filcon);
    let pushstr = ""
    for(let res of filcon){
        pushstr += `<li>${res}</li>`
    }
    results.innerHTML = pushstr;
}
function flag(event){
    let filcon = findcountries()
    // event.target.style.backgroundImage = `url(${})`
}
input.addEventListener("input",display);
results.addEventListener("click",flag);
