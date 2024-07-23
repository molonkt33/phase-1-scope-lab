// Global variable declaration
var customerName = 'bob';

// Function to modify the customerName variable to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set a global bestCustomer variable
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite the global bestCustomer variable
function overwriteBestCustomer(newName) {
  window.bestCustomer = newName;
}

// Function to attempt to change a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'Charlie';

// Function that tries to change the leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Dave'; // This will throw an error because leastFavoriteCustomer is a constant
}
