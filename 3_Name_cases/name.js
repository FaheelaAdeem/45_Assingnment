var personName = "Faheela Adeem";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase(); }).join(" ");
console.log(personName = lowercase);
console.log(personName = uppercase);
console.log(personName = titlecase);
