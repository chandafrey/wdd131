// // Short version - just code - see below for full breakdown
       
// // const input = document.querySelector('#favchap');
// // const button = document.querySelector('button');
// // const list = document.querySelector('#list');


// // button.addEventListener('click', function() {
// // 	if (input.value.trim !== '') {
// // 		input.focus();
// // 		const li = document.createElement('li');
// // 		const deleteButton = document.createElement('button');
// // 		li.textContent = input.value;
// // 		deleteButton.textContent = '❌';
// // 		li.append(deleteButton);
// // 		list.append(li);
	
// // 		deleteButton.addEventListener('click', function() {
// // 			list.removeChild(li);
// // 			input.focus();
// // 			input.value = '';
// // 		});
// // 	};
// // });



// // In your blank js file, declare three (3) variables that
// //  HOLD REFERENCE to the input, button, and list elements.
// const input = document.querySelector('#favchap'); //you need to use # because it's an id
// //and use the "favchap" because it has an id for input
// const button = document.querySelector('button');
// const list = document.querySelector('#list');//I think you would put list here
// //because the ul(unordered list) has an id of "list"

// // PART 2 inserted - button.addEventListener and if(input. )
// // --------------------------------------------------
// // Create a click event listener for the Add Chapter button using an 
// // addEventListener.
// button.addEventListener('click', function() {
//     //code to execute when the button is clicked
//     if (input.value.trim() !== '') {
//         input.focus();
// // ----------------------------------------------------


// // PART 1 Now needs indented---------------------------------
// // CREATE a li element that will hold each entry's chapter title 
// // and an associated delete button.
//         const li = document.createElement('li');

// // Create a delete button.
//         const deleteButton = document.createElement('button');

// // Populate the li element variable's textContent or innerHTML with the 
// // input value.
//         li.textContent = input.value;

// // textContent is preferred over innerHTML because it is more secure.
// // However, if you need to include HTML tags, then you would use innerHTML.
// // textContent will not render HTML tags. It will display the tags as text.

// // Why is the value property used?
// // Because the input variable references an HTML input text field and that 
// // is what is wanted, i.e., the user's entry. Here is the HTML that was 
// // provided: <input type="text" id="favchap" placeholder="Alma 5">

// // Populate the button textContent with a ❌.
//         deleteButton.textContent = '❌';

// // You need to consider screen readers and how they will interpret anything in 
// // the content. For example, the delete button just has an emoticon❌ and may 
// // not read correctly as the button to remove a chapter. What can we do? 
// // One solution is to create a aria-label attribute on the button with a 
// // value like "Remove Alma 5".https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaLabel

// // Append the li element variable with the delete button.
//         li.append(deleteButton);

// // Append the li element variable to the unordered list in your HTML.
//         list.append(li);




// // PART 2 - The Rest of it---------------------------------------------------------


//  // Add an event listener to the delete button that removes the li element when clicked.
//         deleteButton.addEventListener('click', function() {
//             list.removeChild(li);
//             input.focus();

// // Change the input value to nothing or the empty string to clean up the interface for the user.
//             input.value = '';
    
// // Whether or not a list item was created, the focus (active cursor) should be sent to the input element.
//         input.focus();
//         });
//     };
// });


// WEEK 5 ASSIGNMENT-----------------------------------

//1-2.---Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList (This function does not exist, yet).
//3.-----In that same array variable declaration and assignment, add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing.
// This works because the function might not return anything, so it is falsy which means it will revert to assigning the empty array to chaptersArray.

// ***THESE ARE ALREADY DECLARED AT THE TOP OF THIS PAGE
// IF NOT, THEY WOULD NEED TO BE HERE
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
//The first three lines establish references to the DOM elements that you will be using in the program. 
// Note that they only reference the HTML element objects, not any properties.


// Declare array-assign-resultFunction-OR-emptyArray
let chaptersArray = getChapterList() || [];

//The array declaration initializes the chaptersArray variable with the list of chapters returned by 
// the getChapterList() function or an empty array if the function call returns null or undefined.

//4.---Now populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. 
//Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. 
// That way each entry will be processed (i.e., appended to the list).


chaptersArray.forEach(chapter => { //The arrow function executes displayList(chapter) for each item.
        // populateList-ofChapters
        displayList(chapter);    //this is a function being called
});

// ***THIS IS WHAT IT WOULD LOOK LIKE 
// const chaptersArray = ["Chapter 1", "Chapter 2", "Chapter 3"];

// function displayList(chapter) {
//   console.log("Displaying:", chapter);
// }

// chaptersArray.forEach(chapter => {
//   displayList(chapter);
// });
// --------------------------------------

//5.---- Change the button click event listener to only do the following tasks 
// (the other tasks in that original function will be used in a separate function named displayList):
        // Check if the input is empty; if it is not empty, then ...
        // Call displayList with the input.value argument
        // Push the input.value into the chaptersArray
        // Update the localStorage with the new array by calling a function named setChapterList
        // Set the input.value to nothing
        // Set the focus back to the input.
button.addEventListener("click", () => {
        if (input.value != '') { //make sure the input is not empty
                displayList(input.value); //call the function that outputs the submitted chapter
                chaptersArray.push(input.value); //add the chapter to the array
                setChapterList(); //update the LocalStorage with the new array
                input.value = ''; //clear the input after the chapter has been added
                input.focus(); //set the focus back to the input so the user can quickly type a 
                //new chapter without clicking
        }
});

// 6.---Create the displayList defined function that receives one parameter named item.
// 7.---Put all the code that builds a list item from the previous button click event 
// listener into this new displayList function and use the item parameter as the input. 
// A deleteChapter function will need to be called within the delete button click event 
// to remove the chapter from the array and localStorage.
function displayList(item) {
        let li = document.createElement('li')
        let deleteButton = document.createElement('button');
        li.textContent = item //note the use of the displayList parameter 'item'
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
                input.focus(); // set the focus back to the input
        });
        console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// 8.---Define the setChapterList function to set the localStorage item that you 
// have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// 9.----Define the getChapterList function to get the localStorage item. No parameter is needed. 
// Since this function returns to an awaiting array, you will need to use JSON.parse on the string.
function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// 10.---Finally, define the deleteChapter function with a parameter named chapter that does three things.
        //Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when 
// you called the deleteChapter function. Use string.slice() method to extract the last character.
        //Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
        //Call the setChapterList function to update the localStorage item.

function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1); //slices off last character
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
}