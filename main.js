// Get all the card elements within the slide
const cards = document.querySelectorAll(".programs-section .slide .card");
const slideContainer = document.querySelector(".slide-container");

// Add event listeners for each card to handle hover effect
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((card) => card.classList.remove("active"));
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach((card) => card.classList.remove("active"));
  });
});

// Get all the card elements and buttons
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
    updateButtonState();
  }
});

// Add event listener for the right button
rightButton.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    cards[currentIndex].classList.remove("slide-active");
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add("slide-active");
    updateButtonState();
  }
});
updateButtonState();

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
];
const prevSlideButton = document.getElementById("prev");
const nextSlideButton = document.getElementById("next");

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

/* create slide in menu section */

const carousel = document.querySelector(".menu-section .right .slide");
const arrowIcons = document.querySelectorAll(
  ".menu-header .buttons-container i"
);

const firsCard = document.querySelectorAll(".card-image")[0];
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

arrowIcons.forEach((icon) => {
  let firstCardWidth = firsCard.clientWidth + 20;

  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].classList.toggle("disabled", carousel.scrollLeft == 0);
  arrowIcons[1].classList.toggle(
    "disabled",
    carousel.scrollLeft == scrollWidth
  );
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);
