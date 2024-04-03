let current_user: string[] = ['AdeEm','Arshad','AhSan','Yasir','Aiesh'];

let new_user: string[] = ['Ali','Akbar','Ahsan','Taha','Adeem'];

 new_user.forEach(newusername =>{
    let lowercase: string = newusername.toLowerCase();
   if(current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
      console.log(`The username ${newusername} is not available.please write a different username`);
   }
   else{
      console.log(`The username ${newusername} is available.`);
   }
})
 



