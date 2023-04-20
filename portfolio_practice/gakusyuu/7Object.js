'use strict'; 

const obj1 = {};
const obj2 = new Object();

function print(Person) {
    console.log(name);
    console.log(age);
}

const park = {name : 'park', age : 4};
print(park); 

park.job = true;
print(park);
delete park.jop;
print(park);


// 2.Computed properties
console.log(park.name);
console.log(park[' name']); // computed

// 3. Property value shorthand

const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 2};
const person3 = {name: 'park', age: 2};

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // retrun this;
}

const person4 = new Person('erika', 27);


// 5. in operator
console.log('age' in park);

// for..in for..of
console.clear();
for (key in park){
    console.log(key);
} 

const array = [1,2,3,4,5];
for(value of array){
    console.log(value); //OUTPUT: 1,2,3,4,5
}

// 6.cloning
const user1 = {name:'park', age=32};
const user2 = user1;

user2.name = 'corder'; // user1.name === 'corder'

console.clear();
console.log(user1.name);

const user4 = {};
Object.assign(user4, user1);
console.log(user4);
user4.name = 'osakaSumi';
console.log(user1.name,user4.name); // user1.name Output: corder , user2.name Output: osakaSumi