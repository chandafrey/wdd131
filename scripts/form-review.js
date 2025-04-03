//FOOTER DATES-------------------------------------- 
// To get "lastModified", you need these two lines
let lastModified = document.lastModified;
// ${lastModified} and the backticks`` make this line a template literal and more simple to read
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// To get "currentYear"
let currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// -------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0; //parseInt converts the string to a number
  reviewCount++; //increment counting
  localStorage.setItem("reviewCount", reviewCount);

  const counterElement = document.getElementById("reviewCounter"); //need "reviewCounter" in html
    if (counterElement) {
      counterElement.textContent = `You have completed ${reviewCount} reviews.`;
    }
});