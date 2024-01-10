const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["indigo", "blue", "pink", "green", "yellow", "orange", "red"];
body.style.backgroundColor = "black";

document.querySelector("button").addEventListener('click', function () {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
});
