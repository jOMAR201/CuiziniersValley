'use strict';

let dataObj = localStorage.getItem(JSON.parse('dataArray'));
// add all dihes to the dataObject
// const dishArraysByContry = new DishDataArray([]);
// for (let i in DishObject.allDishes) {
//     dishArraysByContry.addNewDish(DishObject.allDishes[i]);
// }
// let targetPageDiv = document.querySelectorAll('section.cuisineSection');
// for (let index = 0; index < dishArraysByContry.data.length; index++) {
//     for (let j = 0; j < targetPageDiv.length; j++) {
//         if (targetPageDiv[j].id == dishArraysByContry.data[index].dishCountry) {
//             for (let i = 0; i < dishArraysByContry.data[index].dishes.length; i++) {
//                 createCard(dishArraysByContry.data[index].dishes[i]);
//             }
//         }
//     }
// }

let targetPageDiv = document.querySelectorAll('section.cuisineSection');
for (let targetDiv in targetPageDiv) {
    for (let dish in dataObj) {
        if (dataObj[dish].dishCountry == targetPageDiv[targetDiv].id) {
            createCard(dataObj[dish]);
        }
    }
    
}

// for (let i in targetPageDiv) {
//     targetPageDiv[i].addEventListener('click', handleCardClick);
// }


function createCard(dishObject) {
    let parentSection = document.getElementById(dishObject.dishCountry);
    let article = document.createElement('article');
    parentSection.appendChild(article);
    let dishName = document.createElement('h3');
    dishName.textContent = dishObject.dishName;
    article.appendChild(dishName);
    let img = document.createElement('img');
    article.append(img);
    img.src = dishObject.dishImage;
    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = dishObject.dishInfo;

    let buttonsDiv = document.createElement('div');
    let orderButton = document.createElement('button');
    orderButton.textContent = `Order ${dishObject.dishName}`;
    let makeButton = document.createElement('button');
    makeButton.textContent = `Make ${dishObject.dishName}`;
    let moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = `More Info About ${dishObject.dishName}`;
    buttonsDiv.appendChild(moreInfoButton);
    buttonsDiv.appendChild(orderButton);
    buttonsDiv.appendChild(makeButton);
    article.appendChild(buttonsDiv);
}
