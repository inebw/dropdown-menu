import carousel from "./carousel";

export default function slideMove() {
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  leftButton.addEventListener("click", carousel);
  rightButton.addEventListener("click", carousel);
}
