const keyCount = 9;
const keylabels = ['A','S','D','F','G','H','J','K','L'];
let board = document.querySelector("#piano-board");
let audio = document.querySelector("audio");

class Key {
    
    constructor(index) {
        let keyname = "key" + (index+1);
        let keysound = "./sounds/" + keyname +".mp3";

        //defining a key 
        let key = document.createElement("div");
        key.classList.add("key");
        board.append(key);
        

        // for text inside a key
        let keytext = keylabels[index];
        key.innerText = keytext;
        

        //sound
        window.addEventListener("keydown", function(event){
            // console.log(typeof event.key);
            let eventkey = event.key.toUpperCase();
            if(eventkey == keytext){
                audio.src = keysound;
                audio.currentTime = 0;
                audio.play();
            }
        }
        )
        return key;
    }
}

//making keys
for (let i = 0; i < keyCount; i++) {
    new Key(i);
}