// Define an empty array to store the shopping list items
let shoppingList = [];

// Define a function that handles the form submission event
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form inputs
  const itemNameInput = document.querySelector('#item-name');
  const itemQuantityInput = document.querySelector('#item-quantity');

  // Create a new object with the name and quantity properties
  const newItem = {
    name: itemNameInput.value,
    quantity: itemQuantityInput.value
  };

  // Push the new object to the shopping list array
  shoppingList.push(newItem);

  // Clear the form inputs
  itemNameInput.value = '';
  itemQuantityInput.value = '';

  // Call the function that updates the list on the page
  updateList();
}

// Define a function that updates the list on the page
function updateList() {
  // Get the unordered list element from the DOM
  const itemList = document.querySelector('#item-list');

  // Clear any existing list items from the unordered list
  itemList.innerHTML = '';

  // Loop through the shopping list array and create a new list item for each item in the array
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.quantity}`;

    // Add an event listener to the list item that calls a function to remove the item from the shopping list array
    listItem.addEventListener('click', () => {
      removeItem(index);
    });

    // Append the list item to the unordered list
    itemList.appendChild(listItem);
  });
}

// Define a function that removes an item from the shopping list array
function removeItem(index) {
  shoppingList.splice(index, 1);

  // Call the function that updates the list on the page
  updateList();
}

// Add event listeners to the form submit button and 
// the document's DOMContentLoaded event
const addItemForm = document.querySelector('#add-item-form');
addItemForm.addEventListener('submit', handleFormSubmit);

document.addEventListener('DOMContentLoaded', () => {
  updateList();
});
