let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function autoSlide() {
  // Hide all cards
  cards.forEach((card) => {
    card.style.opacity = '0';
  });

  // Show current card with opacity transition
  cards[currentIndex].style.opacity = '1';

  // Move to the next card
  currentIndex = (currentIndex + 1) % totalCards;
}

// Call autoSlide every 3 seconds
setInterval(autoSlide, 3000);

// Initial call to display the first card
autoSlide();
console.log(cards);  // Check if cards are being selected properly
