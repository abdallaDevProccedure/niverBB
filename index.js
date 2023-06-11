const carouselContainer = document.querySelector('.carousel-container');
let currentPosition = 0;
const images = Array.from(carouselContainer.children);

function moveCarousel() {
  const imageWidth = carouselContainer.clientWidth;
  const nextPosition = currentPosition - imageWidth;
  carouselContainer.style.transform = `translateX(${nextPosition}px)`;
  currentPosition = nextPosition;

  if (currentPosition <= -(imageWidth * (images.length))) {
    currentPosition = 0;
    carouselContainer.style.transform = 'translateX(0)';
  }
}

setInterval(moveCarousel, 3000);