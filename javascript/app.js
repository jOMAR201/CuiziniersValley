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


new DishObject('Dolma', 'Iraq', 'Lunch', 'dolma is a great family dish' , 'https://image.freepik.com/free-photo/azerbaijani-dolma-made-with-tomato-green-bell-pepper-eggplant-with-meat-stuffings_114579-3067.jpg', ['rice', 'meat', 'zucchini', 'eggplant', 'grape leaves' ], [' Place the grape leaves in a bowl and pure hot water. Leave for 10 minutes. Drain and reserve', ' Finely chop parsley, mint, dill and onion','Wash well the rise until the water transparent','In a large bowl place the beef or lamb, add the chopped herbs, onion, rice, olive oil, water, salt, pepper and mix well',' Lay each grape leaf flat on a work surface shiny side down', 'Place about 1-2 tablespoons stuffing in middle of leaf and Fold both sides of the leaf towards the center.','You can eat them hot, warm or cold. Enjoy!']);


new DishObject('Pacha', 'Iraq', 'Lunch', 'Al-pacha is an Iraqi food made of love', 'https://e3arabi.com/wp-content/uploads/2020/11/shutterstock_1702789567-780x470.png', ['sheep tripe', 'small diced meat', 'rice', 'lamb head', 'lamb tongues', 'cow feet'], ['Wash trotters and cut them into 2 pieces', 'Rub rice flour and salt and wash again','Place trotters with 2 cups water and salt to taste in a pan and bring to a boil','Lower the heat and simmer for 1 1/2 hours, adding more water if needed.','To make the masala, heat ghee and add cumin','Add tomatoes, green chilli, chilli powder, turmeric, garam masala and salt to taste','Add the trotters and stir-fry till well coated with the masala.']);


new DishObject('Maskuf', 'Iraq', 'Lunch', 'maskuf is a fish dish', 'https://www.middleeasteye.net/sites/default/files/styles/article_page/public/Masgouf%20main%20main.jpg?itok=5Ftm9GJI', ['fish', 'olive oil', 'vinegar', 'onions', 'tomato paste', 'curry'], ['Wash trotters and cut them into 2 pieces', 'Rub rice flour and salt and wash again','Place trotters with 2 cups water and salt to taste in a pan and bring to a boil','Lower the heat and simmer for 1 1/2 hours, adding more water if needed.','To make the masala, heat ghee and add cumin','Add tomatoes, green chilli, chilli powder, turmeric, garam masala and salt to taste','Add the trotters and stir-fry till well coated with the masala.']);


new DishObject('Meat Tashrib', 'Iraq', 'Lunch', 'dish made from pieces of bread', 'https://media.istockphoto.com/photos/lamb-tashreeb-iraqi-food-mobile-photography-picture-id1126585743?k=6&m=1126585743&s=170667a&w=0&h=WSb_zTljwg9dbuE1xyS1FN_Fu6V8kxxKzmhx7B80sCg=', ['meat',  'tanoor bread', 'hummus beans','onion'], ['Wash the tripe well and cut into 3 cm squares. Place in a large saucepan with the lamb shanks and chickpeas, cover with cold water and bring to the boil. Drain off the water.', 'Add enough fresh water to the pan to just cover the tripe and lamb shanks. Add the dried limes, each pierced twice with a skewer, or the lemon rind.','Wash the garlic bulb well and strip off the outer layers of papery skin, leaving the unpeeled cloves exposed. Leave the garlic intact and add to the pan. Bring to a slow simmer, skimming as required.','Remove and discard the garlic bulb and the limes or lemon rind.','Lift out the lamb shanks and strip the meat from the bones. Cut the meat into pieces and return to the pan. Bring to the boil to reheat the meat.']);



const menuIcon = document.getElementById("humburger-menu");
console.log(menuIcon);
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", openMenu);

function openMenu() {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("change");
}
