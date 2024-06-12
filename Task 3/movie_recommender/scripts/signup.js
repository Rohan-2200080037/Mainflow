// signup.js

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var profilePicFile = document.getElementById("profile-pic").files[0];

    var reader = new FileReader();
    reader.onloadend = function() {
        var profilePic = reader.result;

        // Store user details in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);
        localStorage.setItem("profilePic", profilePic);

        // Redirect to login page after successful registration
        window.location.href = "../templates/index.html";
    };

    if (profilePicFile) {
        reader.readAsDataURL(profilePicFile);
    }
});
