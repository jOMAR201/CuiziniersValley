"use strict";



const DishObject = function (name, country,type, info, imgPath, ingredients, instructions) {
  this.dishName = name;
  this.dishImage = imgPath;
  this.dishCountry = country;
  this.dishInfo = info;
  this.dishType = type;
  this.dishIngredients = ingredients;
  this.dishInstructions = instructions;
  this.addNewDish();
}
DishObject.allDishes = [];
let previous;
if (localStorage.getItem('dishesData')) {
  previous = JSON.parse(localStorage.getItem('dishesData')); 
}
for (let i in previous) {
  DishObject.allDishes.push(previous[i]);
}

DishObject.prototype.addNewDish = function () {
  if (!this.checkIdDishExists()) {
    DishObject.allDishes.push(this);
    this.saveToLocalStorage();
  } else {
    console.log("Dish exist");
  }

}

DishObject.prototype.saveToLocalStorage = function () {
  localStorage.setItem('dishesData',JSON.stringify(DishObject.allDishes))
}

DishObject.prototype.checkIdDishExists = function () {
  for (let dish in DishObject.allDishes) {
    if (DishObject.allDishes[dish].dishName.toLowerCase() === this.dishName.toLowerCase() && DishObject.allDishes[dish].dishCountry.toLowerCase() === this.dishCountry.toLowerCase()) {
      return true;
    }
  }
  return false;
}


new DishObject('Mansaf', 'Jordan','Lunch', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('kabseh', 'Jordan','breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('mjadara', 'Jordan', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Dolma', 'Iraq', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);



const menuIcon = document.getElementById("humburger-menu");
console.log(menuIcon);
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", openMenu);
function openMenu() {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("change");
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

//Background

let header2 = document.getElementById("header2");

//array of images

let imagesArray = [
  "001.jpg",
  "002.jpg",
  "003.jpg",
  "004.jpg",
  "005.jpg",
  "006.jpg",
];

setInterval(function () {
  let rand = Math.floor(Math.random() * imagesArray.length);
  header2.style.backgroundImage = 'url("images/' + imagesArray[rand] + '")';
}, 5000);

// slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
