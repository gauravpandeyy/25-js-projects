const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

let currentSlide = 0;
let slides = [];
let dots = [];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Fetch and display images
async function fetchListOfImages() {
    const data = await fetch("https://picsum.photos/v2/list?page=1&limit=5", { method: "GET" });
    const response = await data.json();

    if (response && response.length > 0) {
        displayImages(response);
        initSlider(); // Initialize only after images are loaded
    }
}

// Display images and dots in DOM
function displayImages(response) {
    slider.innerHTML = response.map((item) => `
        <div class="slide">
            <img src="${item.download_url}" alt="${item.id}" />
        </div>
    `).join("");

    dotsContainer.innerHTML = response.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
    `).join("");
}

// Initialize the slider
function initSlider() {
    slides = document.querySelectorAll(".slide");
    dots = document.querySelectorAll(".dot");

    // Initial slide position
    goToSlide(currentSlide);
    activateDot(currentSlide);

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
        activateDot(currentSlide);
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
        activateDot(currentSlide);
    });

    dotsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("dot")) {
            const slide = +e.target.dataset.slide;
            currentSlide = slide;
            goToSlide(slide);
            activateDot(slide);
        }
    });
}

// Set slide positions
function goToSlide(slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}

// Activate corresponding dot
function activateDot(slide) {
    dots.forEach(dot => dot.classList.remove("active"));
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add("active");
}

// Start everything
fetchListOfImages();
