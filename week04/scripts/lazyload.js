//FOOTER DATES-------------------------------------- 
// To get "lastModified", you need these two lines
let lastModified = document.lastModified;
// ${lastModified} and the backticks`` make this line a template literal and more simple to read
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// To get "currentYear"
let currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
