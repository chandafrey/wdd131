// Hamburger Menu Button //
// This script toggles the visibility of the navigation menu when the hamburger button is clicked.
// It also closes the menu when a link is clicked.
// Start with connecting to the id #menu and the class .navigation in the HTML document.
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
// Add an event listener to the hamburger button that toggles the menu visibility.
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
