'use strict';

function renderCards() {
    let targetPageDiv = document.querySelectorAll('section.cuisineSection');
    for (let targetDiv in targetPageDiv) {
        for (let dish in DishObject.allDishes) {
            if (DishObject.allDishes[dish].dishCountry == targetPageDiv[targetDiv].id) {
                createCard(DishObject.allDishes[dish]);

            }
        }
        
    }
    
}
renderCards();




function createCard(dishObject) {
    let parentSection = document.getElementById(dishObject.dishCountry);
    let parentDiv = document.createElement('div');
    parentDiv.style.position = 'relative';
    parentDiv.classList.add('cardDiv');
    parentDiv.style.perspective = '1000px';
    // parentDiv.style.width = '100%';
    // parentDiv.style.height = '30vh';
    parentSection.appendChild(parentDiv);

    let article = document.createElement('article');
    article.classList.add('cardFace')
    article.style.position = 'absolute';
    article.style.transformStyle = 'preserve-3d';
    article.style.backfaceVisibility = 'hidden';
    parentDiv.appendChild(article);
    
    let recipeDiv = createRecipeDiv(dishObject);
    recipeDiv.classList.add('recipe')
    recipeDiv.style.position = 'absolute';
    recipeDiv.style.perspective = '1000px';
    recipeDiv.style.backfaceVisibility = 'hidden';
    recipeDiv.style.transformStyle = 'preserve-3d';
    recipeDiv.style.transform = ('rotateX(180deg)');
    parentDiv.appendChild(recipeDiv);

    let img = document.createElement('div');
    img.classList.add('cardImgs');
    img.style.backgroundImage = `url(${dishObject.dishImage})`;
    article.append(img);

    let infoElements = document.createElement('div');
    infoElements.classList.add('info');
    article.appendChild(infoElements);

    let dishName = document.createElement('h2');
    dishName.textContent = dishObject.dishName;
    infoElements.appendChild(dishName);

    let dishCountry = document.createElement('h4');
    dishCountry.textContent = dishObject.dishCountry;
    infoElements.appendChild(dishCountry);

    

    let p = document.createElement('p');
    p.textContent = dishObject.dishInfo;
    infoElements.appendChild(p);

    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('btnDivs');
    buttonsDiv.id = dishObject.dishName;
    article.appendChild(buttonsDiv);

    let orderButton = document.createElement('button');
    orderButton.textContent = `Order ${dishObject.dishName}`;
    orderButton.classList.add('orderBtn')
    buttonsDiv.appendChild(orderButton);
    orderButton.addEventListener('click', buttonsClickHandler);    

    let makeButton = document.createElement('button');
    makeButton.textContent = `Make ${dishObject.dishName}`;
    makeButton.classList.add('makeBtn')
    buttonsDiv.appendChild(makeButton);
    makeButton.addEventListener('click', buttonsClickHandler);

    // let moreInfoButton = document.createElement('button');
    // moreInfoButton.textContent = `More Info About ${dishObject.dishName}`;
    // moreInfoButton.classList.add('infoBtn');
    // buttonsDiv.appendChild(moreInfoButton);
    // moreInfoButton.addEventListener('click', buttonsClickHandler);
}

function createRecipeDiv(dishObject) {
    let div =document.createElement('div');
    // div.style.position = 'absolute';
    // div.style.backfaceVisibility ='hidden';
    // div.style.transform = 'rotateY(180deg)'
    // div.style.display = 'none';
    let ingredientsList = document.createElement('ul');
    ingredientsList.style.listStyleType = 'none';
    let instructionsList = document.createElement('ol');
    div.appendChild(ingredientsList);
    div.appendChild(instructionsList);
    for (let ing in dishObject.dishIngredients) {
        let ingItem = document.createElement('li');
        ingItem.innerHTML = `<li ><input class="listItem" type="checkbox" name="item0${ing}" id="item0${ing}"><label for="item0${ing}">${dishObject.dishIngredients[ing]}</label></li>`;
        // ingItem.textContent = dishObject.dishIngredients[ing];
        ingredientsList.appendChild(ingItem);
    }
    for (let inst in dishObject.dishInstructions) {
        let instItem = document.createElement('li');
        instItem.textContent = dishObject.dishInstructions[inst];
        instructionsList.appendChild(instItem);
        
    }
    let backButton = document.createElement('button');
    backButton.textContent = 'back→';
    backButton.classList.add('back')
    div.appendChild(backButton);
    backButton.addEventListener('click', buttonsClickHandler);
    return div;
}
function buttonsClickHandler(e) {
    let targetButton = e.target;
    if (targetButton.classList.contains('orderBtn')) {
        console.log('if inside orderBtn');
        localStorage.setItem('orderedDish', targetButton.parentElement.id )
        window.location.href = '/pages/order.html';
    }
    else if (targetButton.classList.contains('makeBtn')) {
        let parentSection = targetButton.parentElement.parentElement.parentElement;
        // console.log(parentSection);
        parentSection.firstChild.style.transform = 'rotateX(180deg)'
        parentSection.firstChild.style.transition = 'transform 2s'
        parentSection.lastChild.style.transform = 'rotateX(360deg)'
        parentSection.lastChild.style.transition = 'transform 2s'
        // parentSection.style.transform = 'rotateY(180deg)';
    } else if (targetButton.classList.contains('back')) {
        let parentSection = targetButton.parentElement.parentElement;
        parentSection.firstChild.style.transform = 'rotateX(0deg)';
        parentSection.firstChild.style.transition = 'transform 2s';
        parentSection.lastChild.style.transform = 'rotateX(180deg)';
        parentSection.lastChild.style.transition = 'transform 2s';
    }
}

let el = document.getElementsByClassName('listItem');
for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('change', itmeDone, false);
}

function itmeDone(e) {
    let target, itemParent;
    target = e.target;
    itemParent = target.parentNode;

    if (this.checked) {
        itemParent.style.textDecoration = 'line-through';
        itemParent.style.color = 'rgba(0,0,0,0.6)';
    } else {
        itemParent.style.textDecoration = 'none';
        itemParent.style.color = 'rgba(0,0,0,1)';
    }
    e.preventDefault();
}