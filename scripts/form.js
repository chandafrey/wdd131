//FOOTER DATES-------------------------------------- 
// To get "lastModified", you need these two lines
let lastModified = document.lastModified;
// ${lastModified} and the backticks`` make this line a template literal and more simple to read
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// To get "currentYear"
let currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// -------------------------------------------------------------------
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  // Populate Dropdown //
const selectElement = document.getElementById("productChoice");
products.forEach(product => {
  let option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});

// LocalStorage tracking //
document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = parseInt(reviewCount);
  localStorage.setItem("reviewCount", reviewCount);
});