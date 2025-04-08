// This file is for the cake form Review Confirmation page.
// ...cake-form-review.html


// EVENT LISTENER to count the number of times the form is submitted
document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0; //parseInt converts the string to a number
  reviewCount++; //increment counting
  localStorage.setItem("reviewCount", reviewCount);

  const counterElement = document.getElementById("reviewCounter"); //need "reviewCounter" in html
    if (counterElement) {
      counterElement.textContent = `You have completed ${reviewCount} reviews.`;
    }
});

