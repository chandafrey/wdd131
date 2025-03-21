let firstName = "Antonia";
let lastName = "francesca";

// Function Declaration  - Purpose - combine those two strings
// parameters together and return one combined string with a space in between
function fullname(first, last) {
  return '${first} ${last}';
}


// Anonymous Function Expression - function Assigned to a variable*/
const fullName = function(first, last) {
    return '${first} ${last}';
}


// Arrow Function Expression - function Assigned to a variable*/
// you will need to comment the previous function to run this one
const fullName = (firstName, lastName) => '${firstName} ${lastName}';


// Write an expression that calls the fullName function and writes 
// the result to an existiong HTML elements text node with the Id of fullName/
document.getElementById('fullName').textContent = fullName(firstName, lastName);
// OR
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

