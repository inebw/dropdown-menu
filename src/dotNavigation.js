import carousel from "./carousel";

export default function dotNavigation() {
  const allDots = document.querySelectorAll(".selection");

  allDots.forEach((element) => {
    element.addEventListener("click", carousel);
  });
}
