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
// DishDataArray.prototype.addToLocalStorage = function () {
//   localStorage.setItem('dishArrays', JSON.stringify(this.items));
// }
// creating dishes 
const DishObject = function (name, country,type, info, imgPath, ingredients, instructions) {
  this.dishName = name;
  this.dishImage = imgPath;
  this.dishCountry = country;
  this.dishInfo = info;
  this.dishType = type;
  this.dishIngredients = ingredients;
  this.dishInstructions = instructions;
  addNewDishToTheStorage(this);
}
function addNewDishToTheStorage(dish) {
  // First: parse
  let previousData = [];
  if (localStorage.getItem('dishArrays') !== undefined || localStorage.getItem('dishArrays') !== null) {
    previousData = localStorage.getItem('dishArrays');
  } else {
     previousData.push(dish);
    // previousData = [];
  }
  // check exisrence
  if (!checkDishes(dish,previousData)) {
    // push to the object if not existed
    previousData.push(dish);
    // set local storage
    localStorage.setItem('dishArrays',JSON.stringify(previousData))
  } else {
    // show message to the userif it is already there
    console.log("Dish exist");
  }
  
}

DishObject.allDishes = [];

function checkDishes(dish, dataObj) {
  for (let i in dataObj) {
    if (dataObj[i].dishName.toLowerCase() === dish.dishName.toLowerCase() && dataObj[i].dishCountry.toLowerCase() === this.dishCountry.toLowerCase()) {
      return true;
    }
  }
  return false;
}
// Array class that holds each country and the dishes it has
// const DishArray = function (countryName) {
//   this.dishCountry = countryName;
//   this.dishes = [];
// }



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
