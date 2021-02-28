"use strict";

//things to do
//1-add ingrediant function
//2-fix the form
//3-Local storage
//4-css




// add button of ingrediant list 
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", ingrediantList);
//add button of instruction list
let addInstructionButton=document.getElementById("addInstruction");
addInstructionButton.addEventListener("click", instructionList);

//submit button
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", CreateNewIgrediant);

// list for ingrediants
let list = document.getElementById("listOfIngrediants");
let ingrediantItem;
let instructions = document.getElementById("listOfInstructions").value;
let instructionItem;

function ingrediantList(event) {
  event.preventDefault();

  let IngredaintInput = document.getElementById("ingredientNew").value;
  console.log(IngredaintInput);
  ingrediantItem = document.createElement("li");
  list.appendChild(ingrediantItem);

  let Quantity = document.getElementById("Quantity").value;

  ingrediantItem.innerText = IngredaintInput + "   " + Quantity;

  let deleteButton = document.createElement("button");
  ingrediantItem.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteItem);

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
}

let deleteItem = function (event) {
  event.preventDefault();

  //Remove the parent list item from the ul
  let ingrediantItem = this.parentNode;
  let OL = ingrediantItem.parentNode;

  list.removeChild(ingrediantItem);
};


//-----------------------------------------------------------------INSTRUCTION------------------------------------------------------------

function instructionList(event) {
  event.preventDefault();
  let instruction = document.getElementById("instructions").value;
  console.log('instruction',instruction);

  instructionItem = document.createElement("li");
  listOfInstructions.appendChild(instructionItem);
  instructionItem.innerText = instruction ;

  let deleteButton = document.createElement("button");
  instructionItem.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteInstruction);

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";



}

let deleteInstruction = function (event) {
  event.preventDefault();
  

  console.log("instruction Delete...");
  //Remove the parent list item from the ul
  let instructionItem = this.parentNode;
  let OL = instructionItem.parentNode;

  listOfInstructions.removeChild(instructionItem);

};
// ----------------------------------------------------------------------------------------SUBMIT EVENT-------------------------------------------
function CreateNewIgrediant(event) {
  event.preventDefault();
  console.log("444444444444444");

  // IngredaintInput.innerText="  ";
  // recipeForm.reset();

  let name = document.getElementById("nameOfTheDish").value;
  console.log("name", name);
  let country = document.getElementById("countryNewDish").value;
  console.log("country", country);
  let Type = document.getElementById("TypeDish").value;
  let ingredient = document.getElementById("ingredientNew").value;
  console.log("ingredient", ingredient);
  let Quantity = document.getElementById("Quantity").value;
  console.log("Quantity", Quantity);
  let imagePath = document.getElementById("UploadImage").value;
  console.log("imagePath", imagePath);

  let describtion = document.getElementById("info").value;
  console.log("describtion", describtion);
}


