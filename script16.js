'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`hello ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`user ${this.name} left `);
};

const ivan = new User('Ivan', 28);
const alex = new User('Akex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
