"use strict";
let magician = ['Harry potter', 'Harmione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(array) {
    return [...array];
}
function make_greet(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the great ' + magicianArray[i];
    }
}
function show_Magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_greet(copyMagicianArray);
console.log('\n\nThis is my orignal array:');
show_Magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_Magicians(copyMagicianArray);
