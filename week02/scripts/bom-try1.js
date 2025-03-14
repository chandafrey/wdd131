const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

// create function that will respond to button being clicked
// // check if input value is not empty...if true, then append item to a list and 
// display a delete button

button.addEventListener('click', function() {
    // add if statement here
    if (input.value.trim() !== '') {

        // store input in myChapter
        const myChapter = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');

        listItem.appendChild(listText);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);

        listText.textContent = myChapter;
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function() {
            list.removeChild(listItem);
            input.focus();
        })

    input.focus();
    }



});