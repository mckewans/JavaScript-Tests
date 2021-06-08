
const people = function(name, age, email) {
    this.name = name,
    this.age = age,
    this.email = email,
    this.about = function() {
        return name + ' is ' + age + ' years old ';
    }
}
  
const aliens = function(name, age, email, drinks, planet) {
    people.call(this, name, age, email);
    this.planet = planet;
    this.drinks = drinks;
    this.about = function() {
        return name + ' is ' + age + ' years old, is from ' + this.planet + ' ';
    }
}
  
people.prototype.drinks = "squash";
  
let a = new people('Fred Blogs', 32, 'fred.blogs@tester.com');
let b = new people('Geoff Slogs', 44, 'fred.blogs@tester.com');
let c = new aliens("Zapod Beeblebrox", 99, 'zaphbeeb@universalmail.org', 'booze', 'mars');
  
a.drinks = "neat Gin"
  //b.drinks = "water";

  let vq = document.getElementsByClassName('.wrapper').html = '<p>' + c.about() + 'and likes to drink ' + c.drinks + '</p>' +
  '<p>' + b.about() + 'and likes to drink ' + b.drinks + '</p>'+
  '<p>' + a.about() + 'and likes to drink ' + a.drinks + '</p>';
  
console.log(vq);