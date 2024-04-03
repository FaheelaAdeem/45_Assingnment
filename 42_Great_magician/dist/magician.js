"use strict";
let magician = ['Harry potter', 'Harmione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_greet(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great ' + magicianArray[i];
    }
}
function showmagician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_greet(magician);
showmagician(magician);
