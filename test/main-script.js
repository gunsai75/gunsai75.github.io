const trailer = document.getElementById("trailer");
const interactables = document.querySelectorAll("a, .interactable");

const trailerHoverScale = 1.3;
const trailerClickScale = 0.7;

// This single listener now handles all updates efficiently
window.addEventListener("mousemove", (e) => {
    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    // We get the mouse position
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    // Determine the correct scale based on the trailer's classes
    let scaleValue = 1;
    if (trailer.classList.contains("click")) {
        scaleValue = trailerClickScale;
    } else if (trailer.classList.contains("hover")) {
        scaleValue = trailerHoverScale;
    }

    // Set the translate and scale properties directly
    // `translate` will update instantly, while `scale` will transition smoothly via CSS
    trailer.style.translate = `${x}px ${y}px`;
    trailer.style.scale = `${scaleValue}`;
});

// These listeners now only toggle classes, letting CSS and the mousemove listener handle the rest
window.addEventListener("mousedown", () => {
    trailer.classList.add("click");
});

window.addEventListener("mouseup", () => {
    trailer.classList.remove("click");
});

interactables.forEach(element => {
    element.addEventListener("mouseenter", () => {
        trailer.classList.add("hover");
    });
    element.addEventListener("mouseleave", () => {
        trailer.classList.remove("hover");
    });
});