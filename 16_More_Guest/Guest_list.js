var Guest_list = ['Adeem', 'Yasir', 'Rohan'];
//for (let i = 0; i < Guest_list.length; i++) {
//console.log ('Dear,Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
//}
//    Answer no 15
var absent_Guest = 'Rohan';
var new_Guest = 'Arish';
Guest_list[2] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear,Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party."));
console.log('Good News!we find big table so we are inviting 3 more guest.');
Guest_list.unshift('Sir Imran');
Guest_list.splice(2, 0, 'Maryam');
Guest_list.push('Muskan');
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear,Mr.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
