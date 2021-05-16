const menuItems = [
    { item: "Meat Pizza",     price: 2.90 },
    { item: "Cream Cheese",   price: 1.25 },
    { item: "Dry Pasta",      price: 1.95 },
    { item: "Tomato Puree",   price: 0.50 },
    { item: "Cream Crackers", price: 1.35 }
];



const total = menuItems.reduce((accumulator, menuItem) => {
    return accumulator + menuItem.price; //?
},0);

total.toFixed(2); //?

// 2nd option

let theTotal = 0;
menuItems.forEach(element => {
    theTotal += element.price; 
    return theTotal; //?
});

theTotal.toFixed(2); //?