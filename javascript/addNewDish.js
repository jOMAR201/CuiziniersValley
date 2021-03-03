"use strict";

// add button of ingrediant list 
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", ingrediantList);
//add button of instruction list
let addInstructionButton = document.getElementById("addInstruction");
addInstructionButton.addEventListener("click", instructionList);
//submit button
let submitButton = document.getElementById("submitButton");
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
    // Quantity.textContent = '';
    // console.log(ingrediantArray);
    // console.log(ingrediantArray);

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
    // console.log(ingredientIndex);
    // console.log(ingrediantArray);

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
    // console.log('instruction', instruction);
    instructionArray.push(instruction);
    // console.log('array', instructionArray);

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

    // console.log(instructionIndex);
    // console.log(instructionArray);

    let instructionItem = this.parentNode;
    let OL = instructionItem.parentNode;

    // instructionArray.splice(instructionIndex);
    // console.log("instruction Delete...");
    //Remove the parent list item from the ul


    listOfInstructions.removeChild(instructionItem);
};
// ----------------------------------------------------------------------------------------SUBMIT EVENT-------------------------------------------
function CreateNewIgrediant(event) {
    // event.preventDefault();

    // IngredaintInput.innerText="  ";
    // recipeForm.reset();

    let name = document.getElementById("nameOfTheDish").value;
    // console.log("name", name);
    let country = document.getElementById("countryNewDish").value;
    // console.log("country", country);
    let Type = document.getElementById("TypeDish").value;
    let ingredient = document.getElementById("ingredientNew").value;
    // console.log("ingredient", ingredient);
    let Quantity = document.getElementById("Quantity").value;
    // console.log("Quantity", Quantity);
    let imagePath = document.getElementById("UploadImage").value;
    // console.log("imagePath", imagePath);

    let describtion = document.getElementById("info").value;
    // console.log("describtion", describtion);
    // add new object  from form data
    new DishObject(name, country, Type, describtion, imagePath, ingrediantArray, instructionArray);
}