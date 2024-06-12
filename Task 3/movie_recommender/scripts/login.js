document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve stored credentials from local storage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Validate entered credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to profile page if credentials are valid
        window.location.href = "../templates/home.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
