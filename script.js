// Retrieve form and input elements
const form = document.querySelector("form"); // Get the form element
const usernameInput = document.querySelector("#username"); // Get the username input field
const passwordInput = document.querySelector("#password"); // Get the password input field
const rememberMeCheckbox = document.querySelector("#checkbox"); // Get the "Remember me" checkbox
const existingButton = document.querySelector("#existing"); // Get the "Login as existing user" button

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Retrieve username, password, and "Remember me" checkbox value
  const username = usernameInput.value; // Get the value of the username input field
  const password = passwordInput.value; // Get the value of the password input field
  const rememberMe = rememberMeCheckbox.checked; // Check if the "Remember me" checkbox is checked

  // Store or remove username and password based on "Remember me" checkbox
  if (rememberMe) { // If "Remember me" checkbox is checked
    localStorage.setItem("username", username); // Store the username in local storage
    localStorage.setItem("password", password); // Store the password in local storage
  } else { // If "Remember me" checkbox is unchecked
    localStorage.removeItem("username"); // Remove the username from local storage
    localStorage.removeItem("password"); // Remove the password from local storage
  }

  // Display an alert with the logged-in username
  alert(`Logged in as ${username}`); // Show an alert with the logged-in username

  // Show "Login as existing user" button if there are saved credentials
  showButton(); // Call the showButton function to determine whether to display the button

  form.reset(); // Clear the form fields after submission
});

// Function to handle login as existing user
function loginAsSaved() {
  // Retrieve saved username from local storage
  const username = localStorage.getItem("username"); // Get the saved username from local storage

  // Display an alert with the logged-in username
  alert(`Logged in as ${username}`); // Show an alert with the logged-in username

  form.reset(); // Clear the form fields after logging in as an existing user
}

// Function to show or hide "Login as existing user" button based on saved credentials
function showButton() {
  // Retrieve saved username and password from local storage
  const username = localStorage.getItem("username"); // Get the saved username from local storage
  const password = localStorage.getItem("password"); // Get the saved password from local storage

  // If both username and password are saved, display the button; otherwise, hide it
  if (username && password) { // If both username and password are present in local storage
    existingButton.style.display = "block"; // Display the "Login as existing user" button
  } else { // If either username or password is missing from local storage
    existingButton.style.display = "none"; // Hide the "Login as existing user" button
  }
}

// Hide the "Login as existing user" button initially
existingButton.style.display = "none"; // Hide the button by default

// Add event listener to "Login as existing user" button to handle existing user login
existingButton.addEventListener("click", loginAsSaved); // Add an event listener to the button to handle click events

// Show or hide the "Login as existing user" button based on saved credentials
showButton(); // Call the showButton function to determine whether to display the button
