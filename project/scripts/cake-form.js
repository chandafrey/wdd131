const products = [
    {
        cakeName: "Banana Cake",
        description: "Banana Cake is a moist and delicious cake made with ripe bananas, flour, sugar, eggs, and butter. It is often topped with cream cheese frosting or a simple glaze.",
        style: "Deep Dish",
        servings: 24,
        imageUrl:
        "images/bananaCake.webp" 
    },
    {
        cakeName: "Brownie Biscoff Cake",
        description: "Brownie Biscoff Cake is a decadent dessert that combines rich chocolate brownies with the unique flavor of Biscoff cookies. It is often layered with Biscoff frosting and topped with crushed cookies.",
        style: "Roll",
        servings: 12,
        imageUrl:
        "images/brownie-biscoff.webp"
    },
    {
        cakeName: "Chocolate Truffle Cake",
        description: "Chocolate Truffle Cake is a rich and indulgent dessert made with layers of chocolate cake, chocolate ganache, and truffle filling. It is often garnished with chocolate shavings or fresh berries.",
        style: "Layer",
        servings: 8,
        imageUrl:
        "images/Chocolate-truffle.webp"
    },
    {
        cakeName: "Churro Cake",
        description: "San Diego, California, United States",
        style: "Layer",
        servings: 16,
        imageUrl:
        "images/Churro-cake.webp"   
    },
    {
        cakeName: "Disneyland Chocolate Smash Cake",
        description: "San Diego, California, United States",
        style: "Layer",
        servings: 12,
        imageUrl:
        "images/Disneyland-smash.webp"   
    },
    {
        cakeName: "Ultimate Smores Cake",
        description: "San Diego, California, United States",
        style: "Roll",
        servings: 12,
        imageUrl:
        "images/Ultimate-smores.webp"   
    },
    {
        cakeName: "Biscoff Bundt Cake",
        description: "San Diego, California, United States",
        style: "Bundt",
        servings: 12,
        imageUrl:
        "images/Biscoff-bundt.webp"   
    },
    {
        cakeName: "Dark Chocolate Bundt Cake",
        description: "San Diego, California, United States",
        style: "Bundt",
        servings: 12,
        imageUrl:
        "images/Dark-chocolate-bundt.webp"   
    },
    {
        cakeName: "Raspberry Bundt Cake",
        description: "San Diego, California, United States",
        style: "Bundt",
        servings: 12,
        imageUrl:
        "images/Raspberry-bundt.webp"   
    },
  
  
];
  
  
  // Populate Dropdown //
// const selectElement = document.getElementById("productChoice");
// products.forEach(product => {
//   let option = document.createElement("option");
//   option.value = product.id;
//   option.textContent = product.name;
//   selectElement.appendChild(option);
// });
document.addEventListener("DOMContentLoaded", () => {
const selectElement = document.getElementById("productChoice");

  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.cakeName;
    option.textContent = product.cakeName;
    selectElement.appendChild(option);
  });
// });

// STAR RATING
const starInputs = document.querySelectorAll('input[name="stars"]');

starInputs.forEach(input => {
    input.addEventListener("change", () => {
        const selectedValue = parseInt(input.value);
      
        if (selectedValue <= 2 ) {
        alert("We're sorry you are not 100% satisfied.  Please tell us how we can improve.");
        }
        });
    });
});


