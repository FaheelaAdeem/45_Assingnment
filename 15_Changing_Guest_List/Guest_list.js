var Guest_list = ['Adeem', 'Yasir', 'Rohan'];
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear,Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
//    Answer no 15
var absent_Guest = 'Rohan';
var new_Guest = 'Arish';
Guest_list[2] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear,Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party."));
