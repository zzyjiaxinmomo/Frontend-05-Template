class Human {
  constructor(name) {
    this.name = name;
  }
  hurt(method) {
    console.log(this.name + ' is hurt by ' + method);
  }
}

class Dog {
  constructor(name) {
    this.dogName = name;
  }
  attack(obj) {
    console.log(this);
    obj.hurt(this.dogName + ' attacked');
  }
}

let human = new Human('李明');
let dog = new Dog('旺财');
dog.attack(human);
