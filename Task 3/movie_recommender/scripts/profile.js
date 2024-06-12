document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    const username = document.getElementById('username');
    const profilePicLarge = document.getElementById('profile-pic-large');
    const usernameLarge = document.getElementById('username-large');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');

    // Fetch user profile data from local storage
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedProfilePic = localStorage.getItem('profilePic');
    const storedPhone = localStorage.getItem('phone');
    const storedAddress = localStorage.getItem('address');

    if (storedUsername && storedEmail && storedProfilePic && storedPhone && storedAddress) {
        profilePic.src = storedProfilePic;
        profilePicLarge.src = storedProfilePic;
        username.textContent = storedUsername;
        usernameLarge.textContent = storedUsername;
        email.textContent = storedEmail;
        phone.textContent = storedPhone;
        address.textContent = storedAddress;
    }
});
