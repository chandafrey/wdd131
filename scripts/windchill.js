// WINCHILL Function------

// In html you need something like this line:
/* <p id="windchillResult">Calculating Windchill...</p> */

// const temp = parseFloat(document.getElementById("temp").textContent);
// const speed = parseFloat(document.getElementById("speed").textContent);
const temperature = 45;
const windspeed = 5;    

function calculateWindChill(temperature, windspeed) {
    // const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    const windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
    return windchill;
}  

// Calculate windchill using static values
const windchill = calculateWindChill(temperature, windspeed);

// Check if windchill conditions are met..<=50 degrees and > 3 mph
let result;
if (temperature <= 50 && windspeed > 3) {
    result = Math.round(windchill); //Round result if conditions are met
} else {
    result = "N/A"; //Display N/A if conditions are not met
}

// Display results on page...different ways to write this
// document.getElementById("windchillResult").textContent = ' ${windchill}°F';
// document.getElementById('windchillResult').innerText = ` ${windchill.toFixed(2)}°F`;
document.getElementById('windchillResult').innerText = `${result}°F`;

