let Guest_list:string[]=['Adeem','Yasir','Rohan'];
//for (let i = 0; i < Guest_list.length; i++) {
   //console.log ('Dear,Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

//}
//    Answer no 15

let absent_Guest :string = 'Rohan';
let new_Guest :string = 'Arish';
Guest_list[2] = new_Guest ;
// for (let i = 0; i < Guest_list.length; i++) {
//    console.log ('Dear,Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log ('Good News!we find big table so we are inviting 3 more guest.');

//array mai 3 Guest add kye hain.
Guest_list.unshift('Sir Imran');
Guest_list.splice(2,0,'Maryam');
Guest_list.push('Muskan');

//yaha pr mene 6 Guest array ko print krwaya hain.
for (let i = 0; i < Guest_list.length; i++) {
   console.log ('Dear,Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
   
}
//sorry message to Guest for not inviting.
console.log('\n sorry we can not arrange big table,only two peoples will be invited.');

// yaha pr mene Guest remove kye hain.
while (Guest_list.length> 2) {
   let remove_Guest = Guest_list.pop();
   console.log (`Sorry Mr.${remove_Guest},you are not invited for dinner`);
}
// bachai hoye 2 Guest ko invite kya hain.
for (let i = 0; i < Guest_list.length; i++) {
   console.log ('Dear,Mr.' + Guest_list[i]+',\n\nyou are still invited.\n\nThank you!\n\n');
  
}
//yaha pr Guest remove kye hain.
Guest_list.splice(0,2);
console.log(Guest_list);




















