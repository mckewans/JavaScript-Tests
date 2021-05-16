const restaurants = [
   { name: "Super Dooper", milesAway: 5.1 },
   { name: "Bing Bong", milesAway: 1.4} ,
   { name: "Greasy Spoon", milesAway: 0.4 },
   { name: "Simple Simons", milesAway: 2.1 },
   { name: "Greggs Sarnies", milesAway: 1.2 }
];

const result = restaurants.filter(restaurant => restaurant.name.startsWith('Gre') && restaurant.milesAway < 1); //?

