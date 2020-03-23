"use strict";

let colors = [
    "#663399",
    "#DC143C",
    "#CD5C5C",
    "#4B0082",
    "#FF4500",
    "#A0522D",
    "#A52A2A",
    "#4682B4",
    "#DEB887",
    "#32CD32"
];

let letter = document.getElementById("letter");
let card = document.getElementsByClassName("card")[0];
let love = document.getElementsByClassName("love")[0];
let area = document.getElementsByTagName("main")[0];
let headline = document.getElementsByTagName("h1")[0];

let track = [];
let match = ["P", "I", "Y", "U", "M", "I"];
let repeat = false;

alert("Not work with Chrome-Mobile engines");

function tacker(letter) {
    track.push(letter);
    if (track.length > match.length) {
        track.shift();
    }
    return isEqualArr(track, match)
}

function isEqualArr(arr1, arr2) {
    let arr1_len = arr1.length;
	let arr2_len = arr2.length;
	
	if (arr1_len !== arr2_len) return false;
	
    for (let i = 0; i < arr1_len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
	
    return true;
}

window.onkeyup = function (event) {
    if (event.keyCode < 65 || event.keyCode > 90) {
        return;
    }

    let chr = event.key.toUpperCase();

    if (tacker(chr)) {
        this.console.log("asd")
        if (card.style.display !== "none") card.style.display = "none";

        love.classList.remove("animate");
        setRandomColor(love); // Change card color
        setRandomPos(love); // Change position
        void card.offsetWidth; // Refresh element

        if (love.style.display !== "block") love.style.display = "block";

        love.classList.add("animate");

    } else {
        if (love.style.display === "block") love.style.display = "none";
        if (card.style.display === "none") card.style.display = "block";

        card.classList.remove("animate");
        setRandomColor(card); // Change card color
        setRandomPos(card); // Change position
        letter.innerText = chr; // Change letter
        void card.offsetWidth; // Refresh element
        card.classList.add("animate");
    }


}

function getRandomInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min));
    return min + rnd;
}

function setRandomColor(elem) {
    elem.style.backgroundColor = colors[getRandomInt(0, colors.length)];
}

function setRandomPos(elem) {
    let max_x = area.offsetWidth - 200;
    let max_y = area.offsetHeight - 200;
    elem.style.left = getRandomInt(10, max_x) + "px";
    elem.style.top = getRandomInt(10, max_y) + "px";
}
