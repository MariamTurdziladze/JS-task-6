//Create an empty array called passwords to store multiple passwords.
// Add three passwords to the array using push().
//For each password in the array:Convert the password to lowercase and print it.
// Check if the password length is at least 8 characters long: If it is, print "Strong password". 
//If it is not, print "Weak password". 
//Count how many letter are in each password using a for loop and print the result. 
//Remove the first password from the array using shift() and print the updated array.
//Add a new password to the beginning of the array using unshift() and print the updated array. 

let passwords = [];
passwords.push("MaRiam", "COMPUTERSCIENCE", "JustBreathe777");
console.log(passwords);

const i = 0;

for (let i = 0; i < 3; i++) {
    console.log(passwords[i].toLowerCase());
}


for (let i = 0; i < passwords.length; i++) {
    let checkLength = passwords[i].length >=8 ? "Strong password" : "Weak password";
    console.log(passwords[i] + ' is a ' + checkLength)
}

for (let i = 0; i < passwords.length; i++) {
    let letters = passwords[i].length;
    console.log(passwords[i] + ' has ' + letters + ' letters');
}

let remove = passwords.shift();
console.log(passwords);

let added = passwords.unshift("MariamIsBack");
console.log(passwords);