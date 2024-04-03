const user_Name: string[] = ['admin','salman','faizan','aiesh','rohan'];

for (let i = 0; i < user_Name.length; i++) {
    if(user_Name[i] === 'admin') {
        console.log('Hello admin,would you like to see status report?');
    }
    else{
        console.log(`Hello ${user_Name[i]},thank you for loging in again.`)
    }

}




