"use strict";


const DishDataArray = function (data) {
  this.data = data;
}

DishDataArray.prototype.addNewDish = function(dish) {
  let countryExist = false;
  let dishExist = false;
  for (let i = 0; i < this.data.length; i++) {
    if (dish.dishCountry == this.data[i].dishCountry) {
      countryExist = true;
      for (let index = 0; index < this.data[i].dishes.length; index++) {
        if (dish.dishName === this.data[i].dishes[index].dishName) {
          alert("Dish is already exist")
          dishExist = true;
          break;
        }
      }
      if (!dishExist) {
        this.data[i].dishes.push(dish);
        break;
      }
    }


  }

  if (!countryExist) {
    let newCountry = new DishArray(dish.dishCountry);
    newCountry.dishes.push(dish);
    this.data.push(newCountry);
  }

}
DishDataArray.prototype.addToLocalStorage = function () {
  localStorage.setItem('dishArrays', JSON.stringify(this.items));
}
// creating dishes 
const DishObject = function (name, country, info, imgPath, ingredients, instructions) {
  this.dishName = name;
  this.dishImage = imgPath;
  this.dishCountry = country;
  this.dishInfo = info;
  this.dishIngredients = ingredients;
  this.dishInstructions = instructions;
 DishObject.allDishes.push(this);
}
DishObject.allDishes = [];

// Array class that holds each country and the dishes it has
const DishArray = function (countryName) {
  this.dishCountry = countryName;
  this.dishes = [];
}



let dish = new DishObject('Mansaf', 'Jordan', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('kabseh', 'Jordan', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('mjadara', 'Jordan', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('mjadara', 'Jordan', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Dolma', 'Iraq', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);



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
