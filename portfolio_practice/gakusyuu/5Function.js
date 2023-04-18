// Function
// - fundamental building block in the program
// - subprogram can be used mltiple times
// - performs a tast or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. CreateCardAndPint -> createCard, createPoint
// function is object in JS
"use strict";


// function changeName(obj) {
//     obj.name = 'corder';
// }

// const park = { name: 'park' };
// changeName(park);
// console.log(park);

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 5. Local scope
let globalMessage = 'global';
function printMessage();

// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function caculate(command, a, b){
    switch (command) {
        case 'add':
            return a + b;
    }
    console.log(caculate('add',3,5));
}