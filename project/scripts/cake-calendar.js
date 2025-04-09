// this file is my CAKE CALENDAR
// start with making an array for cakeWeeks
// UPDATE MANUALLY
const cakeWeeks = [
    { week: "Mar 30-Apr 5", cakeName: "Churro Cake"},
    { week: "Apr 6-12", cakeName: "Brownie Biscoff Cake"},
    { week: "Apr 13-19", cakeName: "Raspberry Bundt Cake"},
    { week: "Apr 20-26", cakeName: "Ultimate Smores Cake"},
    { week: "Apr 27-May 3", cakeName: "Chocoate Truffle Cake"},
    { week: "May 18-24", cakeName: "Banana Cake"},
    { week: "May 25-31", cakeName: "Dark Chocolate Bundt Cake"},
    { week: "June 1-7", cakeName: "Disneyland Chocolate Smash Cake"},

    
    // Add more weeks as needed
];

// assign a calendarContainer to cakeCalendar in html file
const calendarContainer = document.getElementById("cakeCalendar");

// Use a forEach() on each cakeWeeks and 
// CREATE a place (card) for each week info to go into (div) in html
// ASSIGN a "week-card" to each card with className
cakeWeeks.forEach(entry =>{
    const card = document.createElement("div");
    card.className = "week-card";

    //Tell what information is going into the card .innerHTML
    card.innerHTML = `<h4><strong>${entry.week}:  </strong></h4>
    <p>${entry.cakeName}</p>`;
     
    // take the card into and appendChild to calendarContainer
    calendarContainer.appendChild(card);
});


// CAKE CALENDAR DROP DOWN TOGGLE OPEN/CLOSED
const cakeCalendar = document.getElementById("cakeCalendar");
const calendarToggle = document.getElementById("cakeCalendarToggle");

calendarToggle.addEventListener("click", () => {
    cakeCalendar.classList.toggle("open");
    cakeCalendar.classList.toggle("closed");
    updateCalendarHeader();
});

function updateCalendarHeader() {
    calendarToggle.textContent = cakeCalendar.classList.contains("open") ? "✖" : "Calendar HERE";
}

updateCalendarHeader();
