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
  let content = ''
  for (const item of shoppingList) {
    content += `<li onClick="removeItem('${item.name}')">${item.name} - ${item.quantity}</li>`
  }
  document.querySelector('#item-list').innerHTML = content
}

// Define a function that removes an item from the shopping list array
function removeItem(name) {
  shoppingList = shoppingList.filter(item => item.name !== name)
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
