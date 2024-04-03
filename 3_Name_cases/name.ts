 let personName: string = "Faheela Adeem";

 let lowercase: string = personName.toLowerCase();

 let uppercase: string = personName.toUpperCase();

 let titlecase:string = personName.split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1).
 toLowerCase()).join(" ");

 console.log(personName = lowercase);
 console.log(personName = uppercase);
 console.log(personName = titlecase);
