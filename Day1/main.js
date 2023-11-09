const keyCount = 9;
const keylabels = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
let board = document.querySelector("#piano-board");
let audio = document.querySelector("audio");

class Key {
  constructor(index) {
    let keyname = "key" + (index + 1);
    let keysound = "./sound/" + keyname + ".wav";

    //defining a key
    let key = document.createElement("div");
    key.classList.add("key");
    board.append(key);

    // for text inside a key
    let keytext = keylabels[index];
    key.innerText = keytext;

    key.addEventListener("click",function(){
      key.classList.add("playing-key");
      audio.src = keysound;
      audio.currentTime = 0;
      audio.play();
    })

    //sound
    window.addEventListener("keydown", function (event) {
      let eventkey = event.key.toUpperCase();
      if (eventkey == keytext) {
        key.classList.add("playing-key");
        audio.src = keysound;
        audio.currentTime = 0;
        audio.play();
      }
    });
    key.addEventListener("transitionend", function () {
      key.classList.remove("playing-key");
    });
    return key;
  }
}

//making keys
for (let i = 0; i < keyCount; i++) {
  new Key(i);
}
