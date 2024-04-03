let Guest_list:string[]=['Adeem','Yasir','Rohan'];
   
for (let i = 0; i < Guest_list.length; i++) {
   console.log ('Dear,Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
   
}

//    Answer no 15

let absent_Guest :string = 'Rohan';

let new_Guest :string = 'Arish';

Guest_list[2] = new_Guest ;

for (let i = 0; i < Guest_list.length; i++) {
   console.log ('Dear,Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
   
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);