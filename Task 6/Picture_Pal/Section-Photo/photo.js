// Intersection Observer for opacity and counting animation
const boxes = document.querySelectorAll(".boxs");

const options = {
    root: null,
    threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;

            let valueDisplays = entry.target.querySelectorAll(".num");
            let interval = 4000;

            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        } else {
            entry.target.style.opacity = 0;
        }
    });
}, options);

boxes.forEach((box) => observer.observe(box));

// Fullscreen toggle on image click
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.scales');

    images.forEach(image => {
        image.addEventListener('click', function() {
            toggleFullscreen(image);
        });
    });

    function toggleFullscreen(element) {
        if (!element.classList.contains('fullscreen')) {
            // Make fullscreen
            element.classList.add('fullscreen');
        } else {
            // Exit fullscreen
            element.classList.remove('fullscreen');
        }
    }
});
