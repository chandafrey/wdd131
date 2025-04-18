
//CAKES--------------------------------------------
const cakes = [
    {
      cakeName: "Banana Cake",
      description: "Banana Cake is a flavorful banana cake with fluffy smooth cream cheese vanilla bean frosting.",
      style: "Deep Dish",
      servings: 24,
      price: 20.00,
      imageUrl:
      "images/bananaCake.webp" 
      },
    {
      cakeName: "Brownie Biscoff Cheesecake Roll",
      description: "Brownie Biscoff Cheesecake Roll is a brownie topped with ganache and melted biscoff cookie butter and a whipped cream cheese topping.  This dessert is Swiss rolled with a biscoff and ganache drizzle and a biscoff cookie crumble on top.",
      style: "Roll",
      servings: 12,
      price: 20.00,
      imageUrl:
      "images/Brownie-biscoff.webp"
      },
    {
      cakeName: "Chocolate Truffle Cake",
      description: "Chocolate Truffle Cake is a rich chocolate cake layered with chocolate ganache, and a chocolate truffle filling.  This cake is topped with a chocolate ganache and chocolate buttercream frosting.",
      style: "Layer",
      servings: 12,
      price: 25.00,
      imageUrl:
      "images/Chocolate-truffle.webp"
      },
    {
        cakeName: "Churro Cake",
        description: "Churro Cake is a delicious cinnamon sugar swirled cake with a cinnamon sugar buttercream frosting and a cinnamon chip ganache drip.",
        style: "Layer",
        servings: 12,
        price: 30.00,
        imageUrl:
        "images/Churro-cake.webp"   
    },
    {
      cakeName: "Disneyland Chocolate Smash Cake",
      description: "Disneyland Chocolate Smash Cake is made with layers of brownie, peanut butter filling and vanilla cake with dulce de leche, chocolate crisp pearls and a chocolate buttercream frosting.",
      style: "Layer",
      servings: 12,
      price: 20.00,
      imageUrl:
      "images/Disneyland-smash.webp"   
  },
  {
    cakeName: "Ultimate Smores Cake",
    description: "Ultimate Smores Cake is a delicious chocolate cake with layers of graham cracker crust, chocolate cake, chocolate ganache and a toasted marshmallow filling. This cake is topped with a chocolate frosting and a toasted marshmallow fluff.",
    style: "Roll",
    servings: 12,
    price: 35.00,
    imageUrl:
    "images/Ultimate-smores.webp"   
},
{
  cakeName: "Biscoff Bundt Cake",
  description: "Biscoff Bundt Cake is a delicious cake with a white chocolate ganache drizzle on top.",
  style: "Bundt",
  servings: 12,
  price: 20.00,
  imageUrl:
  "images/Biscoff-bundt.webp"   
},
{
  cakeName: "Dark Chocolate Bundt Cake",
  description: "Dark Chocolate Bundt Cake is a rich chocolate cake with mini chocolate chips and a chocolate ganache.",
  style: "Bundt",
  servings: 12,
  price: 20.00,
  imageUrl:
  "images/Dark-chocolate-bundt.webp"   
},
{
  cakeName: "Raspberry Bundt Cake",
  description: "Raspberry Bundt Cake is a delicious vanilla bunt cake with a swirl of raspberry jelly filling, raspberry and cream cheese lemon glaze.",
  style: "Bundt",
  servings: 12,
  price: 20.00,
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
        const price = document.createElement('p');  
        price.classList.add('price'); 

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

        price.innerHTML = `<span class="label">Price:  </span>$${cake.price.toFixed(2)}`; //toFixed(2) is for 2 decimal places
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
        card.appendChild(price); //this appends the price to the card

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




  
  