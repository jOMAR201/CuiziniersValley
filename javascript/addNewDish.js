"use strict";


//things to do
//1-add ingrediant function
//2-fix the form
//3-Local storage
//4-css


let addButton = document.getElementById("addButton");
addButton.addEventListener("click", ingrediantList);

console.log(addButton);
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", CreateNewIgrediant);
let list = document.getElementById("listOfIngrediants");
let ingrediantItem;
function ingrediantList(event){
  event.preventDefault();

  let IngredaintInput = document.getElementById("ingredientNew").value;
  console.log(IngredaintInput);
  ingrediantItem = document.createElement("li");
  list.appendChild(ingrediantItem);
  ingrediantItem.innerText=IngredaintInput+"   ";

  let deleteButton = document.createElement("button");
  ingrediantItem.appendChild(deleteButton);
  deleteButton.addEventListener('click',deleteItem);

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete"; 

}
function deleteItem(event){
  console.log('5555555');
  event.preventDefault();

  list.removeChild(ingrediantItem);
}




function CreateNewIgrediant(event) {
  event.preventDefault();
  console.log('444444444444444');




let name = document.getElementById('nameOfTheDish').value;
console.log('name',name);
let country = document.getElementById('countryNewDish').value;
console.log('country',country);
let Type = document.getElementById('TypeDish').value;
let ingredient = document.getElementById('ingredientNew').value;
console.log('ingredient',ingredient);
let Quantity = document.getElementById('Quantity').value;
console.log('Quantity',Quantity);
let imagePath = document.getElementById('UploadImage').value;
console.log('imagePath',imagePath);
let instructions = document.getElementById('instructions').value;
console.log('instructions',instructions);
let describtion = document.getElementById('info').value;
console.log('describtion',describtion);



  return ;
}











// //Problem: user interaction doesn't provide desired results
// //Solution: add interactivity so the user can manage daily tasks.

// var taskInput = document.getElementById("new-task"); // new-task
// var addButton = document.getElementsByTagName("button")[0];//first button
// var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
// var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

// //New Task List item

// var createNewTaskElement = function(taskString) {
// 	// create List Item
//   var listItem = document.createElement("li");
//   // input checkbox
//   var checkBox = document.createElement("input");
//   // label
//   var label = document.createElement("label");
//   // input (text)
//   var editInput = document.createElement("input");
//   // button.edit
//   var editButton = document.createElement("button");
//   // button.delete
//   var deleteButton = document.createElement("button");

//   //Each element needs modified

//   checkBox.type = "checkBox";
//   editInput.type = "text";

//   editButton.innerText = "HI ALL";
//   editButton.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";

//   label.innerText = taskString;

//   // Each element needs appending
//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

// 	return listItem;
// }

// //Add a new task
// var addTask = function() {
//   console.log("Add Task...");
//   //Create a new list item with the text from the #new-task:
//   var listItem = createNewTaskElement(taskInput.value);
//   //Append listItem to incompleteTaskHolder
//   incompleteTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
//   taskInput.value = "";
// }

// //Edit an existing task
// var editTask = function() {
//     console.log("Edit Task...");

// var listItem = this.parentNode;

// var editInput = listItem.querySelector("input[type=text]");
// var label = listItem.querySelector("label");

// var containsClass = listItem.classList.contains("editMode");

//   // if class of the parent is .editMode
//   if (containsClass) {
//       //Switch from .editMode
//       //label text become the input's value
//       label.innerText = editInput.value;
//   } else {
//       //Switch to .editMode
//       //input value becomes the labels text
//      	editInput.value = label.innerText;
//   }
//   //Toggle .editMode on the parent
//   listItem.classList.toggle("editMode");
// }

// //Delete an existing task
// var deleteTask = function () {
//     console.log("Delete Task...");
// 		//Remove the parent list item from the ul
//   	var listItem = this.parentNode;
//   	var ul = listItem.parentNode;

//   	ul.removeChild(listItem);
// }

// //Mark a task as complete
// var taskCompleted = function() {
//    console.log("Task Complete...");
//   //When the Checkbox is checked
//   //Append the task list item to the #completed-tasks ul
//    var listItem = this.parentNode;
//    completedTasksHolder.appendChild(listItem);
//    bindTaskEvents(listItem, taskIncomplete);
// }

// //Mark a task as incomplete
// var taskIncomplete = function() {
//   console.log("Task Incomplete...");
//  	//When the checkbox is unchecked appendTo #incomplete-tasks
//   var listItem = this.parentNode;
//   incompleteTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
// }

// //Set the click handler to the addTask function
// addButton.addEventListener("click", addTask);

// var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
//   	console.log("Bind List item events");
//   	// select listitems chidlren
//   	var checkBox = taskListItem.querySelector('input[type="checkbox"]');
//     var editButton = taskListItem.querySelector("button.edit");
//     var deleteButton = taskListItem.querySelector("button.delete");
// 		//bind editTask to edit button
//   	editButton.onclick = editTask;
// 		//bind deleteTask to delete button
//  		deleteButton.onclick = deleteTask;
// 		//bind checkBoxEventHandler to checkbox
//   	checkBox.onchange = checkBoxEventHandler;

// }

// //cycle over incompleteTaskHolder ul list items
// for (var i = 0; i < incompleteTasksHolder.children.length; i ++) {
//   //bind events to list item's children (taskCompleted)
//   bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
// }

// //cycle over completedTaskHolder ul list items
// for (var i = 0; i < completedTasksHolder.children.length; i ++) {
//   //bind events to list item's children (taskCompleted)
//   bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
// }

// function submitNewDish(event) {
//     event.preventDefault();
//     let name = document.getElementById('nameOfTheDish').value;
//     let dishCountry = document.getElementById('countryNewDish').value;
//     let Type = document.getElementById('TypeDish').value;
//     console.log('type',Type);
//     let dishIngredients = document.getElementById('ingredient1').value;
//     let Quantity = document.getElementById('Quantity').value;
//     new DishObject(name, dishCountry, Type, 'this is the path',dishIngredients,Quantity);
//          console.log(DishObject);
// };
