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

// Image Viewer
// This code was insprired by Traversy Media at https://www.youtube.com/watch?v=afoxd5b0bJo
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".thumbnails img");
const opacity = 0.4;

imgs.forEach(img => img.addEventListener("click", imgClick));

imgs[0].style.opacity = opacity;

function imgClick(e){
  // Reset opacity of thumbnails
  imgs.forEach(img => img.style.opacity = 1);
  // Change current image to clicked image
  current.src = e.target.src;
  // Change transparency of thumbnail
  e.target.style.opacity = opacity;

}
