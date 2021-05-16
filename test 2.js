const testDiv = document.getElementById('testDiv');
const $ = require('./js/jquery-3.6.0.min.js');

console.log(testDiv.textContent);

let p = document.getElementsByClassName("test");
let x = document.getElementById('parentBlock');
console.log(x.children[0].children[1].nextElementSibling.className);

var player1 = { name: "Fred Blogs", value: 12, worth: 13500 };
var player2 = { name: "Joe Blow", value: 15, worth: 16750 };

function playDetails() {
    //("This is "+this.name+" and is worth £"+this.worth);
    return (`This is ${this.name} and he's worth £ ${this.worth}.`); //?
}

// assign a function - logDetails to the players that can be associated to playDetails()
player1.logDetails = playDetails;
player2.logDetails = playDetails;
player1.logDetails(); //?
player2.logDetails(); //?

let aa = $('.test01').text(); //?






