"use strict";

// add button of ingrediant list 
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", ingrediantList);
//add button of instruction list
let addInstructionButton = document.getElementById("addInstruction");
addInstructionButton.addEventListener("click", instructionList);
//submit button
let submitButton = document.getElementById("sub");
submitButton.addEventListener("click", CreateNewIgrediant);

// list for ingrediants
let list = document.getElementById("listOfIngrediants");
let ingrediantItem;
let ingrediantArray = [];
let instructions = document.getElementById("listOfInstructions").value;
let instructionItem;
let instructionArray = [];
let IngredaintInputAndQuantity;
/* 1. get value from the input field 2. add lisht 3. append input to the list  */
function ingrediantList(event) {
    event.preventDefault();
    let IngredaintInput = document.getElementById("ingredientNew").value;
    ingrediantItem = document.createElement("li");
    list.appendChild(ingrediantItem);
    let Quantity = document.getElementById("Quantity").value;
    IngredaintInputAndQuantity = IngredaintInput + ' ' + Quantity + ' gram';
    ingrediantArray.push((IngredaintInputAndQuantity));
    ingrediantItem.innerText = IngredaintInput + "   " + Quantity;
    let deleteButton = document.createElement("button");
    ingrediantItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteItem);
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
}

let deleteItem = function(event) {
    event.preventDefault();
    let ingredientIndex = ingrediantArray.indexOf(IngredaintInputAndQuantity);
    ingrediantArray.splice(ingredientIndex);

    //Remove the parent list item from the ul
    let ingrediantItem = this.parentNode;
    let OL = ingrediantItem.parentNode;
    list.removeChild(ingrediantItem);
};


//-----------------------------------------------------------------INSTRUCTION------------------------------------------------------------
let instruction;

function instructionList(event) {
    event.preventDefault();
    instruction = document.getElementById("instructions").value;
    instructionArray.push(instruction);
    instructionItem = document.createElement("li");
    listOfInstructions.appendChild(instructionItem);
    instructionItem.innerText = instruction;
    let deleteButton = document.createElement("button");
    instructionItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteInstruction);
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
}

let deleteInstruction = function(event) {
    event.preventDefault();
    let instructionIndex = instructionArray.indexOf(instruction);
    instructionArray.splice(instructionIndex);
    let instructionItem = this.parentNode;
    let OL = instructionItem.parentNode;

    //Remove the parent list item from the ul
    listOfInstructions.removeChild(instructionItem);
};
// ----------------------------------------------------------------------------------------SUBMIT EVENT-------------------------------------------
function CreateNewIgrediant(event) {
    event.preventDefault();
    let name = document.getElementById("nameOfTheDish").value;
    let country = document.getElementById("countryNewDish").value;
    let Type = document.getElementById("TypeDish").value;
    let ingredient = document.getElementById("ingredientNew").value;
    let Quantity = document.getElementById("Quantity").value;
    let imagePath = document.getElementById("img").value;
    let describtion = document.getElementById("infoText").value;
    document.getElementById("reset").click();
    
    // add new object  from form data
    new DishObject(name, country, Type, describtion, imagePath, ingrediantArray, instructionArray);
}