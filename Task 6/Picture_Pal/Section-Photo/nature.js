// JavaScript for handling semi-screen view on image click
const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('semi-screen');
  });
});
