/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding
     When in the global scope the 'this' keyword will be referring to the window/console object.
     
* 2. Implcit Binding
     Whenever a function is called by a preceding dot, the object before that dot is the object
     that the 'this' keyword is pointing to.  

* 3. New Binding
     Whenever a constructor function is used, the keyword 'this' refers to the specific instance 
     of the object that is created and returned by the constructor function.   

* 4. Explicit Binding
     Whenever JavaScript’s call or apply method is used, the keyword 'this' is explicitly defined.
     Using .call and .apply changes the context of the 'this' keyword in a constructor object 
     in order to override what it points to.   
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Ramses");

// code example for Window Binding
//--------------------------------------

// Principle 2

const personAskingPrice = {
    greeting: 'Hello',
    item:     'House',
    askPrice: function(nameOfPersonAsking) {
      console.log(`${this.greeting} my name is ${nameOfPersonAsking} how much does this ${this.item} cost?`);
    }
  };
  personAskingPrice.askPrice('Ramses');

// code example for Implicit Binding
//---------------------------------------

// Principle 3

function NewPlayerCreator(obj) {
    this.name = obj.name;
    this.team = obj.team;
    this.speak = function() {
        console.log(`Hey! I'm ${this.name} and I'm in the ${this.team} team`)
    }
}

const ramses = new NewPlayerCreator({name: 'Ramses', team: 'Purple'});
const andrea = new NewPlayerCreator({name: 'Andrea', team: 'blue'});

ramses.speak();
andrea.speak();
// code example for New Binding
//---------------------------------------

// Principle 4

ramses.speak.call(andrea);

// The above .call method will cause the 'this' keyword to explicitly point to the values in the object named andrea
// This will cause the return values in the function to be that of the object named andrea and not of the object named ramses.

// code example for Explicit Binding