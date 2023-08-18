// Get all the card elements within the slide
const cards = document.querySelectorAll(".slide .card");

const slideContainer = document.querySelector(".slide-container");
const prevSlideButton = document.getElementById("prev");
const nextSlideButton = document.getElementById("next");

// Add event listeners for each card to handle hover effect
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Remove 'active' class from all cards
    cards.forEach((card) => card.classList.remove("active"));
    // Add 'active' class to the hovered card
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    // Remove 'active' class from all cards when the mouse leaves
    cards.forEach((card) => card.classList.remove("active"));
  });
});

// Get all the card elements and buttons
// const cards = document.querySelectorAll(".slide .card");
const leftButton = document.querySelector(
  ".programs-section-container .fa-circle-chevron-left"
);
const rightButton = document.querySelector(
  ".programs-section-container .fa-circle-chevron-right"
);
let currentIndex = 0;

// Show the initial active card
cards[currentIndex].classList.add("slide-active");
// Update button state based on currentIndex
function updateButtonState() {
  leftButton.classList.toggle("disabled", currentIndex === 0);
  rightButton.classList.toggle("disabled", currentIndex === cards.length - 1);
}

// Add event listener for the left button
leftButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    cards[currentIndex].classList.remove("slide-active");
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[currentIndex].classList.add("slide-active");
    leftButton.classList.remove("disabled");
  }
  // Disable the right button when at the end
  updateButtonState();
});

// Add event listener for the right button
rightButton.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    cards[currentIndex].classList.remove("slide-active");
    currentIndex = (currentIndex + 1) % cards.length;
    console.log(currentIndex);
    console.log(cards.length);
    cards[currentIndex].classList.add("slide-active");
    // Disable the right button when at the end
    updateButtonState();
  }

  // Initialize button state
  updateButtonState();
});

// Define the slide content
const slides = [
  {
    text: "first slide always take care of your health starting from the <br />food menu that you consume every day",
    author: "Rara Sanchez",
    role: "freelancer",
  },

  {
    text: "second slide always take care of your health starting from the <br />food menu that you consume every day",
    author: "ahmed alanasweh",
    role: "fronend ",
  },

  {
    text: "third slide always take care of your health starting from the <br />food menu that you consume every day",
    author: "ali mahmoud ",
    role: "fullstack",
  },
  // Add more slides here...
];

let currentSlideIndex = 0;

function updateSlideButtonState() {
  prevSlideButton.classList.toggle("disabled", currentSlideIndex === 0);
  nextSlideButton.classList.toggle(
    "disabled",
    currentSlideIndex === slides.length - 1
  );
}

// Function to update the slide content
function updateSlideContent() {
  const currentSlide = slides[currentSlideIndex];
  const slideContent = `
    <i class="fa-solid fa-crown fa-2x"></i>
    <p>${currentSlide.text}</p>
    <div class="free-lancer-container">
      <h3>${currentSlide.author}</h3>
      <span>${currentSlide.role}</span>
    </div>
    
    `;
  slideContainer.innerHTML = slideContent;
}

// Add click event listeners to the buttons

prevSlideButton.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlideButtonState();
    updateSlideContent();
  }
});

console.log(slides.length);

nextSlideButton.addEventListener("click", () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlideButtonState();
    updateSlideContent();
  }
});

updateSlideContent();

// smooth scrolling
const navLinks = document.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
}

// const sliderContainer = document.querySelector(".slider-container");
const programsSlides = document.querySelectorAll(".programs-section .slide ");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentProgramsSlideIndex = 0;

// Function to display the current slide
const showSlide = (index) => {
  console.log(index);
  programsSlides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
};

// Event listeners for previous and next buttons
prevButton.addEventListener("click", () => {
  console.log("=======");
  currentProgramsSlideIndex = Math.max(currentProgramsSlideIndex - 1, 0);
  console.log(currentProgramsSlideIndex);

  showSlide(currentProgramsSlideIndex);
});

nextButton.addEventListener("click", () => {
  currentProgramsSlideIndex = Math.min(
    currentProgramsSlideIndex + 1,
    slides.length - 1
  );
  console.log(currentProgramsSlideIndex);

  showSlide(currentProgramsSlideIndex);
});

// Initialize the slider
showSlide(currentProgramsSlideIndex);
