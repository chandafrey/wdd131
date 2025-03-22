// WINCHILL Function--------------------------------------
// To get the Windchill
// const temp = parseFloat(document.getElementById("temp").textContent);
// const speed = parseFloat(document.getElementById("speed").textContent);
const temp = 45;
const speed = 5;    

function calculateWindchill(temp, speed) {
    // const windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    const windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return windchill;
}  

const windchill = calculateWindchill(temp, speed);

let result;
if (temp <= 50 && speed > 3) {
    result = Math.round(windchill);
} else {
    result = "N/A";
}


// document.getElementById("windchillResult").textContent = ' ${windchill}°F';
// document.getElementById('windchillResult').innerText = ` ${windchill.toFixed(2)}°F`;
document.getElementById('windchillResult').innerText = `${result}°F`;

