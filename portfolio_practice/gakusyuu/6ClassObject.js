'use strict';

// class Person {
//     constructor(name, age){
//         this.name =name;
//         this.age = age;
//     }


// // methods
// speak() {
//     console.log(`${this.name}: hello!`);
//     }
// }
// const park = new Person('Park', 21);
// console.log(park.name);
// console.log(park.age);
// park.speak();



// class user {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get age() {
//         return this._age;
//     }
//     set age(value){
//     this._age = value < 0 ? 0 : value;
//     }
// }
// const user1 = new user('Steve', 'Jobs', -1) ;
// console.log(user1.age);


// class Experiment {
//     publicField = 2;
//     #privateField = 2;
// }

// const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.#privateField); 


class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea(){
        return this.width * this.height / 2
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();

const triangle = new Triangle(20,20,'red'); 
console.log(triangle.getArea());