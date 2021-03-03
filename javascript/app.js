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



new DishObject('Dolma', 'Iraq', 'Lunch', 'Dolma is a family of stuffed dishes found in Iraq, in which a vegetable or leaf is used as a container or wrapping for another food used as a filling. Common vegetables for stuffing are tomato, pepper, onion, zucchini, eggplant and pointed gourd.' , 'https://image.freepik.com/free-photo/azerbaijani-dolma-made-with-tomato-green-bell-pepper-eggplant-with-meat-stuffings_114579-3067.jpg', ['rice', 'meat', 'zucchini', 'eggplant', 'grape leaves' ], [' Place the grape leaves in a bowl and pure hot water. Leave for 10 minutes. Drain and reserve', ' Finely chop parsley, mint, dill and onion','Wash well the rise until the water transparent','In a large bowl place the beef or lamb, add the chopped herbs, onion, rice, olive oil, water, salt, pepper and mix well',' Lay each grape leaf flat on a work surface shiny side down', 'Place about 1-2 tablespoons stuffing in middle of leaf and Fold both sides of the leaf towards the center.','You can eat them hot, warm or cold. Enjoy!']);


new DishObject('Pacha', 'Iraq', 'Lunch', 'Pacha is a traditional Iraqi dish made from sheeps head, trotters, and stomach all boiled slowly and served with bread sunken in the broth. The cheeks and tongues are considered the best parts.', 'https://e3arabi.com/wp-content/uploads/2020/11/shutterstock_1702789567-780x470.png', ['sheep tripe', 'small diced meat', 'rice', 'lamb head', 'lamb tongues', 'cow feet'], ['Wash trotters and cut them into 2 pieces', 'Rub rice flour and salt and wash again','Place trotters with 2 cups water and salt to taste in a pan and bring to a boil','Lower the heat and simmer for 1 1/2 hours, adding more water if needed.','To make the masala, heat ghee and add cumin','Add tomatoes, green chilli, chilli powder, turmeric, garam masala and salt to taste','Add the trotters and stir-fry till well coated with the masala.']);


new DishObject('Maskuf', 'Iraq', 'Lunch', 'Maskuf is a fish dish eaten all around Iraq and often referred to as the national dish of the country. The fish used to prepare maskuf is usually freshwater carp, which is butterflied, marinated, set on skewers, then grilled next to an open fire.', 'https://www.middleeasteye.net/sites/default/files/styles/article_page/public/Masgouf%20main%20main.jpg?itok=5Ftm9GJI', ['fish', 'olive oil', 'vinegar', 'onions', 'tomato paste', 'curry'], ['Wash trotters and cut them into 2 pieces', 'Rub rice flour and salt and wash again','Place trotters with 2 cups water and salt to taste in a pan and bring to a boil','Lower the heat and simmer for 1 1/2 hours, adding more water if needed.','To make the masala, heat ghee and add cumin','Add tomatoes, green chilli, chilli powder, turmeric, garam masala and salt to taste','Add the trotters and stir-fry till well coated with the masala.']);


new DishObject('Meat Tashrib', 'Iraq', 'Lunch', 'This dish is typically enjoyed as a communal meal, and the guests usually tear the bread, place it on the plate, and then ladle the stew over it. Tradition suggests using the bread to scoop the stew, rather than utensils.', 'https://media.istockphoto.com/photos/lamb-tashreeb-iraqi-food-mobile-photography-picture-id1126585743?k=6&m=1126585743&s=170667a&w=0&h=WSb_zTljwg9dbuE1xyS1FN_Fu6V8kxxKzmhx7B80sCg=', ['meat',  'tanoor bread', 'hummus beans','onion'], ['Wash the tripe well and cut into 3 cm squares. Place in a large saucepan with the lamb shanks and chickpeas, cover with cold water and bring to the boil. Drain off the water.', 'Add enough fresh water to the pan to just cover the tripe and lamb shanks. Add the dried limes, each pierced twice with a skewer, or the lemon rind.','Wash the garlic bulb well and strip off the outer layers of papery skin, leaving the unpeeled cloves exposed. Leave the garlic intact and add to the pan. Bring to a slow simmer, skimming as required.','Remove and discard the garlic bulb and the limes or lemon rind.','Lift out the lamb shanks and strip the meat from the bones. Cut the meat into pieces and return to the pan. Bring to the boil to reheat the meat.']);



new DishObject('Mansaf', 'Jordan', 'Lunch', "After trying it, I can verify and agree with the Jordanian love for mansaf.", '../images/mansaf-jordanian-food-13-X3.jpg', ['Lamb shoulder meat, cut into pieces', 'rice', 'meat', 'water', 'Vegetable oil', 'Onions, finely chopped', 'Yoghurt'], ['Place the lamb pieces and water in a large saucepan, bring to boil and skim forth.', 'Heat the ghee or oil in a frying pan, add onions and cook for 4-5 mins until softened. Then add to the lamb in the pot.', 'In a saucepan, combine yoghurt and corn flour. Bring to boil under constant stirring and simmer for 2 mins.', 'Stir the yoghurt sauce slowly into the pot of meat, and simmer uncovered over low heat for 5 mins. Taste and adjust the seasoning.', 'Spoon the meat mixture in a large bowl, garnish with the toasted pine seeds, almonds and parsely and serve with rice.']);
new DishObject('Sayadieh', 'Jordan', 'Lunch', "A delicious of fish and rice. This is a showstopping dish that actually just requires a few simple steps. You’ll love it!", '../images/sayadieh-6-768x1152.jpg', ['Vegetable oil', 'rice', 'Hammour fish', 'water', 'Onions, finely choppedtahini sauce', 'Tomatoes, diced'], ['In a deep pot, heat vegetable oil and saute onions until golden brown. Remove and reserve for garnish.', 'Add water and MAGGI® Sayadiya Mix and bring to a boil. Add rice and simmer 3-5 mins until it boils.', 'Place the fish pieces over rice, cover and continue cooking over medium-low heat until water is fully absorbed and rice is fork tender.', 'To prepare the sauce: Combine tahini, lemon juice and water and mix until smooth. Stir in the tomato and serve next to rice and fish as a pour over sauce.', ' Spoon the rice and fish on to a serving plate and garnish the Sayadieh with the reserved fried onions and toasted almond flakes with the sauce on the side.']);
new DishObject('Kousa Bil-Laban', 'Jordan', 'Lunch', " The sauce is a combination of Arabic laban. Amazing dish", "../images/كوسة.jpg", ['Olive oil', 'Onions, finely chopped', 'Minced lamb', 'Garlic, finely chopped', 'Ground Black Pepper', 'Ground cinnamon', 'Egyptian rice', 'Corn flour '], ['Warm oil in a large non-stick pan, add and cook onions for 4-5 minutes or until golden brown.', 'Add minced meat, garlic, black pepper, cinnamon and pine seeds. Cook over medium heat for 5-6 minutes. Add rice and a MAGGI® Chicken Bouillon Less Salt cube and stir for 1 minute.', 'Hollow baby zucchinis and stuff them with the meat mixture. Arrange the stuffed zucchinis in a large saucepan.', 'Add water and a MAGGI® Chicken Bouillon Less Salt cube to the saucepan. Cover and simmer over low heat for 15 minutes or until zucchinis are almost cooked.', ' Combine yogurt and corn flour in a large pot and bring them to boil under constant stirring. Simmer for 3-4 minutes.', 'Pour the yogurt sauce over zucchini and simmer for another 5 minutes or until they are cooked. Stir in garlic and dried mint.']);
new DishObject("Lentil Pasta", "Syria", 'lunch', 'This Syrian pasta with lentils is the ultimate Middle-Eastern comfort food. It is flavored with pomegranate, sumac, and caramelized onions, and topped with crispy homemade pita chips', "https://zenandzaatar.com/wp-content/uploads/2016/04/syrian-pasta-with-lentils-horaa-osbao-vegan-8.jpg", [' lentils', ' water', 'pasta ', 'onion', 'olive oil', 'garlic'], ['Preheat oven to 400 F', 'Separate pita rounds with a knife so that they are only one layer thick.', 'Meanwhile, sauté the onions in a mixture of olive oil and vegetable oil in a saucepan over medium-high heat until they are crispy, caramelized, and browned on the edges', 'Add sumac, dried mint, salt']);
new DishObject('Muhammara', 'Syria', 'lunch', 'This Muhammara recipe is simple, quick and bursting with authentic Middle Eastern flavors.', 'https://foolproofliving.com/wp-content/uploads/2020/01/Muhammara-Recipe-1.jpg', ['Red Bell Peppers ', 'Walnuts ', 'Crackers ', 'Scallions ', 'Extra Virgin Olive Oil ', 'Paprika '], ['Roast the red bell peppers.', 'Steam the bell peppers.', 'Crush the crackers.', 'Process all the ingredients.']);
new DishObject('Syrian Okra Stew', 'Syria', 'Lunch', 'his gorgeous Okra and meat stew is absolutely bursting with flavour and ideal for serving with bread for dipping. Cooked low and slow, it is the ideal meal to share with friends.', 'https://bigseventravel.com/wp-content/uploads/2020/07/Screenshot-2020-07-21-at-11.50.44.png', ['1 Tbsp olive oil', 'lamb ', 'onions', 'garlic', 'salt'], ['Preheat your oven to 300°F (150°C)', 'In a large Dutch oven or cooking pot add your olive oil and heat over medium high heat on the stove. Once the oil is shimmering add your meat and sear for several minutes', 'Remove from heat and add your beef broth, followed by the tomatoes and pomegranate molasses']);


const menuIcon = document.getElementById("humburger-menu");
console.log(menuIcon);
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", openMenu);

function openMenu() {
    menuIcon.classList.toggle("change");
    navbar.classList.toggle("change");
}