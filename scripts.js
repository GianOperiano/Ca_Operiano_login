const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", onSubmit);
username.addEventListener("focus", onFocus);
password.addEventListener("focus", onFocus);

function onSubmit(event) {
	event.preventDefault();
	if (username.value.trim() === "" && password.value.trim() === "") {
		errorMsg.innerHTML = "Please enter your username and password.";
		console.log("Login error.");
	} else if (username.value.trim() === "") {
		errorMsg.innerHTML = "Please enter your username.";
		console.log("Login error.");
	} else if (password.value.trim() === "") {
		errorMsg.innerHTML = "Please enter your password.";
		console.log("Login error.");
	} else {
		// Successful login code goes here
		console.log("Login successful!");
	}
}

// Function for handling text field focus
function onFocus(event) {
	// Reset error message and background color of all text fields
	errorMsg.innerHTML = "";
	username.style.backgroundColor = "white";
	password.style.backgroundColor = "white";
	// Change background color of the focused text field
	event.target.style.backgroundColor = "#f2f2f2";
}
