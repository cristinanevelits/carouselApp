// Check for console functionality
console.log("script.js is linked");

let intervalIds = [];

// auto-scroll function
function autoScroll(element, speed = 1) {
    let direction = 1; 
    let scrollAmount = 0;

    // interval 
    const intervalId = setInterval(() => {
        element.scrollLeft += speed * direction;
        scrollAmount = element.scrollLeft;

        // toggle direction
        if (scrollAmount >= element.scrollWidth - element.clientWidth || scrollAmount <= 0) {
            direction *= -1; // reverse direction
        }
    }, 50); // speed control

    intervalIds.push(intervalId); 
}

// DOM
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.clothing-row');
    rows.forEach(row => autoScroll(row, 2));
});

// stop scrolling
document.addEventListener('click', function() {
    intervalIds.forEach(id => clearInterval(id)); // Clear all intervals
    intervalIds = []; // reset interval
});
