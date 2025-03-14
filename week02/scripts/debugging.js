// https://www.loom.com/share/2b6aa47d5d204d18ba16619200ed6d46?sid=d34b0366-1676-4759-ad5f-98a79ad74709

// Get elements from document

const radiusOutput = document.getElementById('radius'); //because we used .getElementById, 
// we don't need # with id selector 'radius'

// Error 3. When hovering over areaOutput
// const areaOutput = document.querySelector('area');  
// in DevTools, it shows "null"....Remember with .querySelector you have to use # with your 
// id selector *(Or You Could change .querySelector to .getElementById, either works)
// const areaOutput = document.querySelector('area');
const areaOutput = document.querySelector('#area');


let area = 0;
// Error 1.  There should only be 1 = sign because we area
// const PI == 3.14159;  
// only assigning, not comparing
const PI = 3.14159;

// See Error 4....need to change 'const radius' to 'let radius'
// const radius = 10;
let radius = 10;

area = PI * radius * radius;

// Error 2. Assignment to constant variable.... Both of these are previously
// assigned as const variables above, What really was supposed to be assigned
// here is the textContent of these variables 
// radiusOutput = radius;   
// areaOutput = area;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Error 4. Assignment to constant variable...
// We previously assigned 'radius' as a 'const radius', so we need to change it to
// 'let radius' above, so that we can change it here
radius = 20;
area = PI * radius * radius;

// Error 5. The DevTools did not do anything here, but we need to fix it so
// it follows the same pattern as for radius = 10.....use textContent
// radiusOutput = radius;
// areaOutput = area;
radiusOutput.textContent = radius;
areaOutput.textContent = area;