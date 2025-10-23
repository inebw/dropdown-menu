export default function carousel() {
  let nextSlideINT;
  let isRight = true;
  if (this && this.classList) {
    if (this.classList[0] === "left") isRight = false;
    if (this.classList[1]) {
      const selectedDot = parseInt(this.classList[1].slice(3), 10);
      nextSlideINT = selectedDot;
    }
  }
  const imgCarousel = document.querySelector(".caraousel");
  const currentCarouselSlide = imgCarousel.classList[1];
  imgCarousel.classList.remove(currentCarouselSlide);

  const currentSlideINT = parseInt(currentCarouselSlide.slice(3), 10);

  if (!nextSlideINT) {
    if (isRight) nextSlideINT = currentSlideINT === 5 ? 1 : currentSlideINT + 1;
    else nextSlideINT = currentSlideINT === 1 ? 5 : currentSlideINT - 1;
  }

  const nextCarouselSlide = `img${nextSlideINT}`;

  imgCarousel.classList.add(nextCarouselSlide);

  const currSelectedItem = document.querySelector(`.cur${currentSlideINT}`);
  currSelectedItem.style.backgroundColor = "wheat";

  const nextSelectedItem = document.querySelector(`.cur${nextSlideINT}`);
  nextSelectedItem.style.backgroundColor = "black";
}
