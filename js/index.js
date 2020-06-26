// Random link generator for "surprise me" in footer
var surpriseLinks = [
  "https://www.youtube.com/watch?v=ofDyo4KrUHk",
  "https://www.avasdemon.com/",
  "https://www.healyourliving.com/"
];
var randomNum = Math.floor(Math.random() * surpriseLinks.length);

document.querySelector("#surprise").href = surpriseLinks[randomNum];

//Layout for skills
document.getElementById("hidden1").style.visibility = "hidden";
document.getElementById("hidden2").style.visibility = "hidden";
