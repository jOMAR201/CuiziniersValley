'use strict';
const sides = ['french Fries', 'Caiser Salad', 'Hommus', 'Colslow', 'Cheese Fingers', 'Kobbeh', 'Yalanji', 'Greek Salad', 'Arabian Salad', 'Soup', 'Garlic Bread', 'Onion Rings', 'Chicken Wings', 'Meat Balls', 'Falafel', 'Noodles', 'Tabboleh', 'Baba Ghannoj', 'Sambosak', 'Fruit Salad'];
const drinks = ['Soda', 'Water', 'Lemonade', 'Avocado with Honny', 'Shanenah', 'Hot Chocolate', 'Coffee', 'Tea', 'Espresso', 'Cappuccino', 'Milk Shake', 'Carrot Juice', 'Orange Juice', 'Grabe Baverage', 'Malt Baverage', 'Beer', 'Gauva Extract', 'Apple Juice', 'Ckooktale'];

const DishesByCountry = function (country) {
    this.country = country;
    this.dishes = [];
}
DishesByCountry.mains = [];
addMains();
function addMains(){
    let data = JSON.parse(localStorage.getItem('dishesData'));
    let countryExists = false;
    for (let dish in data) {
        for (let country in DishesByCountry.mains) {
            if (data[dish].dishCountry == DishesByCountry.mains[country].country) {
                if (!DishesByCountry.mains[country].dishes.includes(data[dish].dishName)) {
                    DishesByCountry.mains[country].dishes.push(data[dish].dishName);
                }
                countryExists = true;
                break;
            }
        }
        if (!countryExists) {
            let newCountry = new DishesByCountry(data[dish].dishCountry);
            newCountry.dishes.push(data[dish].dishName);
            DishesByCountry.mains.push(newCountry);
            countryExists = false;
        }
        countryExists = false;
    }
}

const RestaurantObj = function (name, countryName) {
    this.restName = name;
    this.restCountry = countryName;
    this.mainDishes = [];
    this.sideDishes = [];
    this.drinksServed = [];
    this.randomDrinks();
    this.randomSides();
    this.randomMainDishes();
    RestaurantObj.allrestaurants.push(this);
}

RestaurantObj.allrestaurants = [];

RestaurantObj.prototype.randomMainDishes = function () {
    let countryInd;
    for (let i in DishesByCountry.mains) {
        if (DishesByCountry.mains[i].country == this.restCountry) {
            countryInd = i;
        }
    }
    let randomNumOfMains = Math.floor(Math.random() * DishesByCountry.mains[countryInd].dishes.length+1);
    let mainsCollection = [];
    let randomInd = 0;
    for (let i = 0; i < randomNumOfMains; i++) {
        do {
            randomInd = Math.floor(Math.random() * DishesByCountry.mains[countryInd].dishes.length);
        }
        while (mainsCollection.includes(randomInd));
        mainsCollection.push(randomInd);
    }
    for (let index in mainsCollection) {
        this.mainDishes.push(DishesByCountry.mains[countryInd].dishes[mainsCollection[index]]);
    }
}

RestaurantObj.prototype.randomDrinks = function () {
    let randomNumOfDrinks = Math.floor(Math.random() * (drinks.length - 4)) + 5;
    let drinksCollection = [];
    let randomInd = 0;
    for (let i = 0; i < randomNumOfDrinks; i++) {
        do {
            randomInd = Math.floor(Math.random() * drinks.length);
        } while (drinksCollection.includes(randomInd));
        drinksCollection.push(randomInd);
    }
    for (let index in drinksCollection) {
        this.drinksServed.push(drinks[drinksCollection[index]]);
    }
}
RestaurantObj.prototype.randomSides = function () {
    let randomNumOfSides = Math.floor(Math.random() * (sides.length - 4)) + 5;
    let sidesCollection = [];
    let randomInd = 0;
    for (let i = 0; i < randomNumOfSides; i++) {
        do {
            randomInd = Math.floor(Math.random() * sides.length);
        } while (sidesCollection.includes(randomInd));
        sidesCollection.push(randomInd);
    }
    for (let index in sidesCollection) {
        this.sideDishes.push(sides[sidesCollection[index]]);
    }
}

function OrderObject(dishOrdered, dishQuantity, sideOrdered, sideQuantity, drinkOrdered, drinkQuantity,restOrder, cusNum, cusAddress) {
    this.dishOrdered = dishOrdered;
    this.dishQuantity = dishQuantity;
    this.sideOrdered = sideOrdered;
    this.sideQuantity = sideQuantity;
    this.drinkOrdered = drinkOrdered;
    this.drinkQuantity = drinkQuantity;
    this.restOrder = restOrder;
    this.cusNum = cusNum;
    this.cusAddress = cusAddress;
    this.deleveryPrice = 2;
    this.totalPrice = this.calculatePrice();
    this.saveToLocalStorage();
}
OrderObject.allOrders = [];

OrderObject.prototype.calculatePrice = function () {
    let price = 0;
    price = (this.dishQuantity * 5) + (this.sideQuantity * 2.5) + (this.drinkQuantity * 1) + this.deleveryPrice;
    return price;
}

OrderObject.prototype.saveToLocalStorage = function () {
    if (localStorage.getItem('orders')) {
        OrderObject.allOrders = [];
        let prevData = JSON.parse(localStorage.getItem('orders'));
        for (let order in prevData) {
            OrderObject.allOrders.push(prevData[order]);
        }
    }
    OrderObject.allOrders.push(this);
    localStorage.setItem('orders',JSON.stringify(OrderObject.allOrders));

}
// renderDrinksSidesMains();
function renderDrinksSides(rest) {
    
    let drinksMenu = document.querySelector('#drink');
    drinksMenu.innerHTML = '';
    drinksMenu.innerHTML = '<option value="" selected disabled hidden>Choose Your Drink</option>';
    for (let drink in rest.drinksServed) {
        let option = document.createElement('option');
        option.value = rest.drinksServed[drink];
        option.textContent = rest.drinksServed[drink];
        drinksMenu.appendChild(option);
    }
    
    let sidesMenu = document.querySelector('#sideDish');
    sidesMenu.innerHTML = '';
    sidesMenu.innerHTML = '<option value="" selected disabled hidden>Choose a Side</option>';
    for (let side in rest.sideDishes) {
        let option = document.createElement('option');
        option.value = rest.sideDishes[side];
        option.textContent = rest.sideDishes[side];
        sidesMenu.appendChild(option);
    }
}
function renderMenu(rest) {
    let mainDishesMenu = document.getElementById('mainDish')
    for (let dish in rest.mainDishes) {
        let option = document.createElement('option');
        option.value = rest.mainDishes[dish];
        option.textContent = rest.mainDishes[dish];
        if (localStorage.getItem('orderedDish') == option.value) {
            option.selected = true;
        }
        mainDishesMenu.appendChild(option);
    }
}
function renderRestaurantsNames(rest) {
    let restMenu = document.getElementById('restaurant');

    let option = document.createElement('option');
    option.value = rest.restName;
    option.textContent = rest.restName;
    restMenu.appendChild(option);
}


new RestaurantObj('Lebanani Snak', 'Jordan');
new RestaurantObj('Burher Makers', 'Jordan');
new RestaurantObj('Salwa', 'Jordan');
new RestaurantObj('Asalah', 'Jordan');
new RestaurantObj('Shawermaerz', 'Jordan');
new RestaurantObj('Compars', 'Syria');
new RestaurantObj('Wajaha', 'Syria');
new RestaurantObj('Bab Al Hara', 'Syria');
new RestaurantObj('Westadi', 'Syria');
new RestaurantObj('Hameiyeh', 'Syria');
new RestaurantObj('Formers', 'Syria');
new RestaurantObj('Qalb', 'Iraq');
new RestaurantObj('&obi Snak', 'Iraq');
new RestaurantObj('Nosrat', 'Iraq');
new RestaurantObj('Bader', 'Iraq');
new RestaurantObj('Elbeik', 'Iraq');
new RestaurantObj('Swarez', 'Iraq');

this.addEventListener('load', handleLoadEvent);
function handleLoadEvent() {
    let mainDishesMenu = document.getElementById('mainDish')
    mainDishesMenu.innerHTML = '';
    mainDishesMenu.innerHTML = '<option value="" selected disabled hidden>Choose the main dish</option>';
    for (let i in RestaurantObj.allrestaurants) {
        renderMenu(RestaurantObj.allrestaurants[i])
    }
    let restaurantAvailable = [];
    for (let restaurant in RestaurantObj.allrestaurants) {
        if (RestaurantObj.allrestaurants[restaurant].mainDishes.includes(localStorage.getItem('orderedDish'))) {
            restaurantAvailable.push(RestaurantObj.allrestaurants[restaurant])
        }
    }
    let restMenu = document.getElementById('restaurant');
    restMenu.innerHTML = '';
    restMenu.innerHTML = '<option value="" selected disabled hidden>Select Restaurant</option>';

    for (let i in restaurantAvailable) {
        renderDrinksSides(restaurantAvailable[i]);
        renderRestaurantsNames(restaurantAvailable[i]);
    }
}
let mainDishMenu = document.getElementById('mainDish');
// let childSelect = mainDishMenu.child
mainDishMenu.addEventListener('change', handleMainDishChange);
function handleMainDishChange(e) {
    let value = e.target.value;
    let restaurantAvailable = [];
    for (let restaurant in RestaurantObj.allrestaurants) {
        if (RestaurantObj.allrestaurants[restaurant].mainDishes.includes(value)) {
            restaurantAvailable.push(RestaurantObj.allrestaurants[restaurant])
        }
    }
    let restMenu = document.getElementById('restaurant');
    restMenu.innerHTML = '';
    restMenu.innerHTML = '<option value="" selected disabled hidden>Select Restaurant</option>';
    
    for (let i in restaurantAvailable) {
        renderDrinksSides(restaurantAvailable[i]);
        renderRestaurantsNames(restaurantAvailable[i]);
    }
}
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', handleReset, false);
function handleReset(e) {
    let restMenu = document.getElementById('restaurant');
    restMenu.innerHTML = '<option value="" selected disabled hidden>No Restaurants Data</option>';
    let sidesMenu = document.querySelector('#sideDish');
    sidesMenu.innerHTML = '';
    sidesMenu.innerHTML = '<option value="" selected disabled hidden>No Restaurants Data</option>';
    let drinksMenu = document.querySelector('#drink');
    drinksMenu.innerHTML = '';
    drinksMenu.innerHTML = '<option value="" selected disabled hidden>No Restaurants Data</option>';
}
let form = document.getElementById('restaurntOrder');
form.addEventListener('submit', submitHandler);

renderOrders();
function submitHandler(e) {
    e.preventDefault();
    createOrdreObject();
    renderOrders();   
}
function createOrdreObject() {
    let orderedDish = document.getElementById('mainDish').value;
    let orderedDishQuantity = document.getElementById('quantityMain').value;
    // parentTable.innerHTML = '';d('quantityMain').value;
    let orderedSide = document.getElementById('sideDish').value;
    let orderedSideQuantity = document.getElementById('quantitySide').value;
    let orderedDrink = document.getElementById('drink').value;
    let orderedDrinkQuantity = document.getElementById('quantityDrink').value;
    let orderedRest = document.getElementById('restaurant').value;
    let customerPhoneNum = document.getElementById('phoneNumber').value;
    let customerAddress = document.getElementById('address').value;
    new OrderObject(orderedDish, orderedDishQuantity, orderedSide, orderedSideQuantity, orderedDrink, orderedDrinkQuantity, orderedRest, customerPhoneNum, customerAddress);
}

function handleDeleteBtn(event) {
    let target = event.target.parentElement.parentElement;
    let indToDelete = target.id;
    let arr = JSON.parse(localStorage.getItem('orders'));
    arr.pop(indToDelete);
    localStorage.setItem('orders', JSON.stringify(arr));
    renderOrders();
    // console.log(arr);
}

function renderOrders() {
    let orderData = JSON.parse(localStorage.getItem('orders'));
    let parentTable = document.getElementById('tbody');
    parentTable.innerHTML = '';
    for (let order in orderData) {
        let orderRow = document.createElement('tr');
        orderRow.id = order;
        parentTable.appendChild(orderRow);

        let delTD = document.createElement('td');
        // delTD.innerHTML = '<button>X</button>';
        let delTDBtn = document.createElement('button');
        delTDBtn.textContent = 'X';
        delTD.appendChild(delTDBtn);
        delTDBtn.addEventListener('click', handleDeleteBtn);
        orderRow.appendChild(delTD);

        let dishQTD = document.createElement('td');
        dishQTD.textContent = orderData[order].dishQuantity;
        orderRow.appendChild(dishQTD);

        let dishTD = document.createElement('td');
        dishTD.textContent = orderData[order].dishOrdered;
        orderRow.appendChild(dishTD);

        let sideQTD = document.createElement('td');
        sideQTD.textContent = orderData[order].sideQuantity;
        orderRow.appendChild(sideQTD);

        let sideTD = document.createElement('td');
        sideTD.textContent = orderData[order].sideOrdered;
        orderRow.appendChild(sideTD);

        let drinkQTD = document.createElement('td');
        drinkQTD.textContent = orderData[order].drinkQuantity;
        orderRow.appendChild(drinkQTD);

        let drinkTD = document.createElement('td');
        drinkTD.textContent = orderData[order].drinkOrdered;
        orderRow.appendChild(drinkTD);

        let restaurantTD = document.createElement('td');
        restaurantTD.textContent = orderData[order].restOrder;
        orderRow.appendChild(restaurantTD);

        let priceTD = document.createElement('td');
        priceTD.textContent = orderData[order].totalPrice + 'JDs';
        orderRow.appendChild(priceTD);
    }
}