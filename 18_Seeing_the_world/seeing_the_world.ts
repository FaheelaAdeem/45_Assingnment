//store the location in a array. make sure is not in alphabatical order.
let places : string[] = ['Italy','Germany','Agra','Eifel tower','lahore'];

//print your array in its original order.
console.log('orignal ' + places);

//print your array in alphabatical order without modifying the actual list.
console.log('copy ' + [...places].sort());


//show that your array is still in its orignal order by printing it.
console.log('orignal ' + places);

//print your array in reverse alphabatical order with out changing the order of the orignal list.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in its orignal order by printing it again.
console.log('orignal ' + places);

//Reverse the order of your list.print the array to show that its order has changed.
console.log('orignal ' + places.reverse());

//Reverse the order of your list again.print the list to show its back to its orignal order.
console.log('orignal ' + places.reverse());

// Sort your arrayso its stored in alphabatical order.print the array to show that
//  its order has been changed
console.log('orignal ' + places.sort());

//sort to change your array so its stored in reverse alphabatical order.
//print the list to show that its order has changed.
console.log('orignal ' + places.sort().reverse());

