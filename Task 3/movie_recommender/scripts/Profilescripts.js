// Profilescripts.js

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    const profilePic = localStorage.getItem("profilePic");

    if (username) {
        document.getElementById("username").textContent = username;
    }

    if (profilePic) {
        document.getElementById("profile-pic").src = profilePic;
    }

    // Hover delay logic
    const profileElement = document.querySelector(".profile");
    const dropdownMenu = document.getElementById("dropdown-menu");
    let hoverTimeout;

    profileElement.addEventListener("mouseenter", function() {
        clearTimeout(hoverTimeout);
        dropdownMenu.style.display = "block";
    });

    profileElement.addEventListener("mouseleave", function() {
        hoverTimeout = setTimeout(function() {
            dropdownMenu.style.display = "none";
        }, 300); // Adjust delay time as needed
    });

    dropdownMenu.addEventListener("mouseenter", function() {
        clearTimeout(hoverTimeout);
    });

    dropdownMenu.addEventListener("mouseleave", function() {
        hoverTimeout = setTimeout(function() {
            dropdownMenu.style.display = "none";
        }, 300); // Adjust delay time as needed
    });
});

function signOut() {
    window.location.href = "index.html";
}
