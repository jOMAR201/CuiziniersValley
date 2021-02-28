"use strict";
let newDish = document.getElementById("addNewDishForm");
document.getElementById("finishNewDish").addEventListener("click", submitNewDish);

function submitNewDish(event) {
    event.preventDefault();
    let name = document.getElementById('nameOfTheDish').value;
    let country = document.getElementById('countryNewDish').value;
    let Type = document.getElementById('TypeDish').value;
    let ingredient1 = document.getElementById('ingredient1');
    let Quantity = document.getElementById('Quantity').value;
    // new DishObject(name, 'Jordan', 'This dish is good', 'this is the path', ['youg', 'rice', 'meat'], ['do this', 'thin this']);      console.log(DishObject);
};
/* Eventlet CookieForm =document.getElementById('form');
CookieForm.addEventListener('submit',submitter);
function submitter(event){
  parent.textContent =" ";
  event.preventDefault();  console.log(event);
  let name = event.target.cityName.value;  console.log('name',name);
  let mincust = event.target.Min.value;  console.log('mincust',mincust);
  let maxcust = event.target.Max.value;  console.log('maxcust',maxcust);
  let avgcookie = event.target.AverageCookie.value;  console.log('avgcookie',avgcookie);
  let shop1 = new shop(name, mincust, maxcust, avgcookie);  console.log('newShop',shop1);
  parent.textContent="  ";
    table();  for (let i = 0; i < shops.length; i++) {    // shops[i].costperHour();    shops[i].render();  }*/