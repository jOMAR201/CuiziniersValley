"use strict";



const DishObject = function(name, country, type, info, imgPath, ingredients, instructions) {
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

DishObject.prototype.addNewDish = function() {
    if (!this.checkIdDishExists()) {
        DishObject.allDishes.push(this);
        this.saveToLocalStorage();
    } else {
        console.log("Dish exist");
    }

}

DishObject.prototype.saveToLocalStorage = function() {
    localStorage.setItem('dishesData', JSON.stringify(DishObject.allDishes))
}

DishObject.prototype.checkIdDishExists = function() {
    for (let dish in DishObject.allDishes) {
        if (DishObject.allDishes[dish].dishName.toLowerCase() === this.dishName.toLowerCase() && DishObject.allDishes[dish].dishCountry.toLowerCase() === this.dishCountry.toLowerCase()) {
            return true;
        }
    }
    return false;
}


new DishObject('Mansaf', 'Jordan', 'Lunch', "After trying it, I can verify.", '/images/mansaf-jordanian-food-13-X3.jpg', ['Lamb shoulder meat, cut into pieces', 'rice', 'meat', 'water',  'Onions, finely chopped', 'Yoghurt'], ['Place the lamb pieces and water in a large saucepan, bring to boil and skim forth.', 'Heat the ghee or oil in a frying pan, add onions and cook for 4-5 mins until softened. Then add to the lamb in the pot.', 'In a saucepan, combine yoghurt and corn flour. Bring to boil under constant stirring and simmer for 2 mins.', 'Stir the yoghurt sauce slowly into the pot of meat, and simmer uncovered over low heat for 5 mins. Taste and adjust the seasoning.', 'Spoon the meat mixture in a large bowl, garnish with the toasted pine seeds, almonds and parsely and serve with rice.']);
new DishObject('Sayadieh', 'Jordan', 'Lunch', "A delicious of fish and rice. This is a showstopping dish that actually just requires a few simple steps. You’ll love it!", '../images/sayadieh-6-768x1152.jpg', ['Vegetable oil', 'rice', 'Hammour fish', 'water', 'Onions, finely choppedtahini sauce', 'Tomatoes, diced'], ['In a deep pot, heat vegetable oil and saute onions until golden brown. Remove and reserve for garnish.', 'Add water and MAGGI® Sayadiya Mix and bring to a boil. Add rice and simmer 3-5 mins until it boils.', 'Place the fish pieces over rice, cover and continue cooking over medium-low heat until water is fully absorbed and rice is fork tender.', 'To prepare the sauce: Combine tahini, lemon juice and water and mix until smooth. Stir in the tomato and serve next to rice and fish as a pour over sauce.', ' Spoon the rice and fish on to a serving plate and garnish the Sayadieh with the reserved fried onions and toasted almond flakes with the sauce on the side.']);
new DishObject('Kousa Bil-Laban', 'Jordan', 'Lunch', " The sauce is a combination of Arabic laban. Amazing dish", '../images/Kousa+Bil+Laban+(Stuffed+Squash+in+Yogurt+Sauce).jpg', ['Olive oil', 'Onions, finely chopped', 'Minced lamb', 'Garlic, finely chopped', 'Ground Black Pepper', 'Ground cinnamon', 'Egyptian rice', 'Corn flour '], ['Warm oil in a large non-stick pan, add and cook onions for 4-5 minutes or until golden brown.', 'Add minced meat, garlic, black pepper, cinnamon and pine seeds. Cook over medium heat for 5-6 minutes. Add rice and a MAGGI® Chicken Bouillon Less Salt cube and stir for 1 minute.', 'Hollow baby zucchinis and stuff them with the meat mixture. Arrange the stuffed zucchinis in a large saucepan.', 'Add water and a MAGGI® Chicken Bouillon Less Salt cube to the saucepan. Cover and simmer over low heat for 15 minutes or until zucchinis are almost cooked.', ' Combine yogurt and corn flour in a large pot and bring them to boil under constant stirring. Simmer for 3-4 minutes.', 'Pour the yogurt sauce over zucchini and simmer for another 5 minutes or until they are cooked. Stir in garlic and dried mint.']);

const menuIcon = document.getElementById("humburger-menu");
console.log(menuIcon);
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", openMenu);

function openMenu() {
    menuIcon.classList.toggle("change");
    navbar.classList.toggle("change");
}