
//CAKES--------------------------------------------
const cakes = [
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

//   Call the Function to get the Cake cards
 //USE THIS LINE OR THE LAST LINE(event listenter)
createCakeCard(cakes);



// Function to Display cake list ALL CAKES---------------------------------
const allCakesLink = document.querySelector('#allCakes');
allCakesLink.addEventListener("click", () => {
    document.querySelector("#cakesContainer").innerHTML = "";
    createCakeCard(cakes);
});


// Function to filter temple list OLD:---------------------------------
const bundtLink = document.querySelector('#bundt');
bundtLink.addEventListener("click", () => {
    document.querySelector("#cakesContainer").innerHTML = "";
    createCakeCard(cakes.filter(cake => (cake.style === "Bundt")));
});

// Function to filter temple list NEW:---------------------------------
const layerLink = document.querySelector('#layer');
layerLink.addEventListener("click", () => {
    document.querySelector("#cakesContainer").innerHTML = "";
    createCakeCard(cakes.filter(cake => (cake.style === "Layer")));
});

const rollLink = document.querySelector('#roll');
rollLink.addEventListener("click", () => {
    document.querySelector("#cakesContainer").innerHTML = "";
    createCakeCard(cakes.filter(cake => (cake.style === "Roll")));
});

const dishLink = document.querySelector('#dish');
dishLink.addEventListener("click", () => {
    document.querySelector("#cakesContainer").innerHTML = "";
    createCakeCard(cakes.filter(cake => (cake.style === "Deep Dish")));
});


// const mediumLink = document.querySelector('#12plus-servings');
// mediumLink.addEventListener("click", (event) => {
//     event.preventDefault();
//     // document.querySelector("#cakesContainer").innerHTML = "";
//     createCakeCard(cakes.filter(cake => cake.servings >= 12 && cake.servings <= 16));
// });

// Function to filter cake list SMALL:---------------------------------
// const smallLink = document.querySelector('#small');
// smallLink.addEventListener("click", () => {
//     document.querySelector("#cakesContainer").innerHTML = "";
//     createCakeCard(cakes.filter(cake => cake.servings === 8));
// });

  //   FUNCTION TO CREATE CAKE CARDS--------------------------------------
//Start with the word function, then name of the function, then the parameters
function createCakeCard(filteredCakes) {
    //   Get the container for the cake cards
    const container = document.getElementById('cakesContainer'); //this is the container for the cake cards
    
    //   Clear the container - was cakesContainer
    container.innerHTML = ''; //this clears the container so it doesn't duplicate the cards
    // document.querySelector("#cakeContainer").innerHTML = "";

    //   Loop through the cakes array using a forEach method
    //Remember the format is name of the object(origional array)
    //and then .forEach(singular name of the object) => {
    filteredCakes.forEach((cake) => {

        // create a card to put into a div for each temple card 
        const card = document.createElement('section');
        card.classList.add('cake-card');

        // create the elements to go into the cake card
        // for example we are saying create a variable
        // called name and make it a new element('h2') to go 
        // inside the cakeCard div in the HTML
        const name = document.createElement('h4');
        const image = document.createElement('img');

        const description = document.createElement('p');
        // if you want to add a class name to an element use it with .classList.add()
        description.classList.add('description');
        const style = document.createElement('p');
        style.classList.add('style');
        const servings = document.createElement('p');  
        servings.classList.add('servings');     

        // Set the inner HTML for the cake card
        // Set the text content for each element
        // Currently the name, description, style, servings elements 
        // above are empty...
        // To fill them, we start with the name of the element
        // (in this case name - from const name) and then we
        // say if it is a .textContent or .innerHTML and then = 
        // the value we want to put in there
        name.textContent = cake.cakeName;
        description.innerHTML = `<span class="label">Description:  </span>${cake.description}`;
        style.innerHTML = `<span class="label">Style:  </span>${cake.style}`;
        servings.innerHTML = `<span class="label">Servings:  </span>${cake.servings}`;

       
        // Set the image source and alt text and lazy loading
        image.src = cake.imageUrl;
        image.alt = `Image of ${cake.cakeName}`;
        image.loading = 'lazy'; //this is for lazy loading
        image.referrerPolicy = "no-referrer"; // Prevents sending cookies

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(image); 
        card.appendChild(description);
        card.appendChild(style);    
        card.appendChild(servings);

        // Append the card to the cakesContainer
        container.appendChild(card); //this appends the card to the container
        
        // Or you could say it like this:
        // document.querySelector("#cakeContainer").appendChild(card)


      
    });

// Add this line to DISPLAY the temple cards
// document.addEventListener("DOMContentLoaded", createTempleCard)


}
const filterLinks = document.querySelectorAll(".cake-filter-nav a");
filterLinks.forEach(link => {
  link.addEventListener("click", () => {
    filterLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});




  
  