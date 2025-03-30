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
// document.getElementById("lastModified").innerText = "Last Modified: " + document.lastModified
// It will look like this:  Last Modified: 03/10/2025 15:37:32

// Or you could do it like this...I don't know what textContent vs .innerText does. 
// But ${lastModified} and the backticks`` make this line a template literal and more simple to read
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;


// To get "currentYear"
let currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

//TEMPLES--------------------------------------------
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "San Diego",
        location: "San Diego, California, United States",
        dedicated: "1993, April 25-30",
        area: 72000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-california-temple-grounds-1164680-wallpaper.jpg"    
    },
    {
        templeName: "Idaho Falls",
        location: "Idaho Falls, Idaho, United States",
        dedicated: "1945, September, 23-25",
        area: 85624,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"    
    },
    {
        templeName: "Snowflake Arizona",
        location: "Snowflake, Arizona, United States",
        dedicated: "2002, March, 3",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/snowflake-arizona/400x250/snowflake-temple-lds-845142-wallpaper.jpg" 
    },
  ];

//   Call the Function to get the temple cards
 //USE THIS LINE OR THE LAST LINE(event listenter)
createTempleCard(temples);

// Function to filter temple list NONUTAH:---------------------------------
// const nonutahLink = document.querySelector('#nonutah');
// nonutahLink.addEventListener("click", () => {
//     // document.querySelector("#templeContainer").innerHTML = "";
//     createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
// });

// Function to Display temple list ALL TEMPLES:---------------------------------
const allTemplesLink = document.querySelector('#allTemples');
allTemplesLink.addEventListener("click", () => {
    document.querySelector("#templesContainer").innerHTML = "";
    createTempleCard(temples);
});


// Function to filter temple list OLD:---------------------------------
const oldLink = document.querySelector('#old');
oldLink.addEventListener("click", () => {
    document.querySelector("#templesContainer").innerHTML = "";
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

// Function to filter temple list NEW:---------------------------------
const newLink = document.querySelector('#new');
newLink.addEventListener("click", () => {
    document.querySelector("#templesContainer").innerHTML = "";
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

// Function to filter temple list LARGE:---------------------------------
const largeLink = document.querySelector('#large');
largeLink.addEventListener("click", () => {
    document.querySelector("#templesContainer").innerHTML = "";
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

// Function to filter temple list SMALL:---------------------------------
const smallLink = document.querySelector('#small');
smallLink.addEventListener("click", () => {
    document.querySelector("#templesContainer").innerHTML = "";
    createTempleCard(temples.filter(temple => temple.area > 10000));
});
  //   FUNCTION TO CREATE TEMPLE CARDS--------------------------------------
//Start with the word function, then name of the function, then the parameters
function createTempleCard(filteredTemples) {
    const container = document.getElementById('templesContainer'); //this is the container for the temple cards
    
    //   Clear the container
    templesContainer.innerHTML = ''; //this clears the container so it doesn't duplicate the cards
    // document.querySelector("#templeContainer").innerHTML = "";

    //   Loop through the temples array using a forEach method
    //Remember the format is name of the object(origional array)
    //and then .forEach(singular name of the object) => {
    filteredTemples.forEach((temple) => {

        // create a card to put into a div for each temple card 
        const card = document.createElement('section');
        card.classList.add('temple-card');

        // create the elements to go into the temple card
        // for example we are saying create a variable
        // called name and make it a new element('h2') to go 
        // inside the templeCard div in the HTML
        const name = document.createElement('h3');
        const location = document.createElement('p');
        const dedicated = document.createElement('p');
        const area = document.createElement('p');       
        const image = document.createElement('img');

        
        // Set the inner HTML for the temple card
        // Set the text content for each element
        // Currently the name, location, dedicated, etc elements 
        // above are empty...
        // To fill them, we start with the name of the element
        // (in this case name - from const name) and then we
        // say if it is a .textContent or .innerHTML and then = 
        // the value we want to put in there
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:  </span>${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:  </span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:  </span>${temple.area} sq ft`;

        // Chatgpt suggested this way to do the Content:
        // It seems more concise than above so I'm not sure if 
        // this is better or not.
        // name.textContent = temple.templeName;
        // location.textContent = `Location: ${temple.location)`;
        // dedicated.textContent = `Dedicated: ${temple.dedicated)`;
        // area.textContent = `Total Area: ${temple.area} sq ft`;

        
        //This was copilot suggestion...it seems a lot less lines
        //than demonstrated in video...i don't know if it will work
        // Create the inner HTML for the temple card
        // templeCard.innerHTML = `
        //     <img src="${temple.imageUrl}" alt="${temple.templeName}" />
        //     <h2>${temple.templeName}</h2>
        //     <p>${temple.location}</p>
        //     <p>Dedicated: ${temple.dedicated}</p>
        //     <p>Area: ${temple.area} sq ft</p>
        // `;

        // Set the image source and alt text and lazy loading
        image.src = temple.imageUrl;
        image.alt = `Image of ${temple.templeName}`;
        image.loading = 'lazy'; //this is for lazy loading
        image.referrerPolicy = "no-referrer"; // Prevents sending cookies

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);    
        card.appendChild(area);
        card.appendChild(image); 

        // Append the card to the templesContainer
        templesContainer.appendChild(card); //this appends the card to the container
        
        // Or you could say it like this:
        // document.querySelector("#templeContainer").appendChild(card)


      
    });

// Add this line to DISPLAY the temple cards
// document.addEventListener("DOMContentLoaded", createTempleCard)


}