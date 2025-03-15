// Create variables for #menu and .navigation to go into
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Create a listenting event that will toggle the hamButton and navigation list
hamButton.addEventListener('click', function() {
// you could also write it like this:
// hamButton.addEventListener('click', () => {

    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//FOOTER DATES-------------------------------------- 
// To get "lastModified", you need these two lines

let lastModified = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified: " + document.lastModified
// It will look like this:  Last Modified: 03/10/2025 15:37:32

// Or you could do it like this...I don't know what textContent vs .innerText does. 
// But ${lastModified} and the backticks`` make this line a template literal and more simple to read
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;


// To get "currentYear"
let currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;