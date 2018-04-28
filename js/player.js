let M = document.querySelector("#M");
console.dir(M);

let btns = document.querySelectorAll(".music-controls div");

let divs = document.querySelectorAll(".time-controls div");
M.onloadedmetadata = function () {
    divs[0].innerHTML = setTime(Math.floor(M.currentTime));
    divs[2].innerHTML = setTime(Math.floor(M.duration));
    btns[1].onclick = function () {
        if (M.paused) {
            M.play();
        } else {
            M.pause();
        }
    }
    // M.playbackRate = 2;
    M.volume=.8;
    // M.muted=true;
}
M.ontimeupdate = function () {
    divs[0].innerHTML = setTime(Math.floor(M.currentTime));
}
function setTime(n) {
    return (parseInt(n / 60) > 9 ? parseInt(n / 60) : "0" + parseInt(n / 60)) + ":" + (n % 60 > 9? n % 60: "0" + n % 60);
}

let thunk = document.querySelector(".thunk");
let old = document.querySelector(".old");
let point = document.querySelector(".point");

