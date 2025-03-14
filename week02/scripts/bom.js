// In your blank js file, declare three (3) variables that
//  HOLD REFERENCE to the input, button, and list elements.
const input = document.querySelector('#favchap'); //you need to use # because it's an id
//and use the "favchap" because it has an id for input
const button = document.querySelector('button');
const list = document.querySelector('#list');//I think you would put list here
//because the ul(unordered list) has an id of "list"

// PART 2 inserted - button.addEventListener and if(input. )
// --------------------------------------------------
// Create a click event listener for the Add Chapter button using an 
// addEventListener.
button.addEventListener('click', function() {
    //code to execute when the button is clicked
    if (input.value.trim() !== '') {
        input.focus();
// ----------------------------------------------------


// PART 1 Now needs indented---------------------------------
// CREATE a li element that will hold each entry's chapter title 
// and an associated delete button.
        const li = document.createElement('li');

// Create a delete button.
        const deleteButton = document.createElement('button');

// Populate the li element variable's textContent or innerHTML with the 
// input value.
        li.textContent = input.value;

// textContent is preferred over innerHTML because it is more secure.
// However, if you need to include HTML tags, then you would use innerHTML.
// textContent will not render HTML tags. It will display the tags as text.

// Why is the value property used?
// Because the input variable references an HTML input text field and that 
// is what is wanted, i.e., the user's entry. Here is the HTML that was 
// provided: <input type="text" id="favchap" placeholder="Alma 5">

// Populate the button textContent with a ❌.
        deleteButton.textContent = '❌';

// You need to consider screen readers and how they will interpret anything in 
// the content. For example, the delete button just has an emoticon❌ and may 
// not read correctly as the button to remove a chapter. What can we do? 
// One solution is to create a aria-label attribute on the button with a 
// value like "Remove Alma 5".https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaLabel

// Append the li element variable with the delete button.
        li.append(deleteButton);

// Append the li element variable to the unordered list in your HTML.
        list.append(li);




// PART 2 - The Rest of it---------------------------------------------------------


 // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();

// Change the input value to nothing or the empty string to clean up the interface for the user.
            input.value = '';
    
// Whether or not a list item was created, the focus (active cursor) should be sent to the input element.
        input.focus();
        });
    };
});
