let btn = document.getElementById("btn");
let currentMode = "light";
console.log("Initial mode: " + currentMode);
btn.addEventListener("click", function() {
    console.log("Mode switched");
    if(currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "lightgray";
    } else {
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "lightgray";
        document.querySelector("body").style.color = "black";
    }
    console.log("Current mode: " + currentMode);
});
