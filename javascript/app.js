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


new DishObject('Malfof', 'Jordan', 'Lunch', 'This dish is good', 'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2018/04/crabs.jpg', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Loma', 'Jordan','breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('MAjdol', 'Jordan', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Dolma', 'Iraq', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Mansaf', 'Iraq','Lunch', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('kabseh', 'Iraq','breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('mjadara', 'Iraq', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Dolma', 'Syria', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Mansaf', 'Syria','Lunch', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('kabseh', 'Syria','breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('mjadara', 'Syria', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Tabboleh', 'Syria', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Mansaf', 'Jordan','Lunch', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('kabseh', 'Jordan','breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('mjadara', 'Jordan', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);
new DishObject('Kaboos', 'Iraq', 'breackfast', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);


const menuIcon = document.getElementById("humburger-menu");
console.log(menuIcon);
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", openMenu);

function openMenu() {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("change");
}
