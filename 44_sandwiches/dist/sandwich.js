"use strict";
function make_sandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwitch !\n');
}
make_sandwich(['Ham', 'cheese', 'lettuce']);
make_sandwich(['Turkey', 'bacon',]);
make_sandwich(['peanut', 'butter', 'jelly']);
