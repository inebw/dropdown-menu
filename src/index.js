import "./styles.css";
import loadingImage from "./loading.gif";
import whatYouNeed from "./whatyouneed.gif";

const img = document.querySelector("img");
const shibaButton = document.querySelector(".shiba");
const searchButton = document.querySelector(".search");
const searchInput = document.getElementById("search");
const form = document.querySelector("form");

img.src = whatYouNeed;

function addImage(searchGIF = "shibainu") {
  img.src = loadingImage;
  const params = new URLSearchParams();
  params.append("api_key", "UG2Rfo0dLmELewpayLFF56JS6bhSV3Pz");
  params.append("s", searchGIF);
  const fetchURL = `https://api.giphy.com/v1/gifs/translate?${params}`;
  console.log(fetchURL, searchGIF);
  fetch(fetchURL)
    .then((response) => {
      if (!response.ok) throw new Error("what the heck");
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      img.alt = "some error happened";
      throw error;
    });
}

shibaButton.addEventListener("click", () => {
  addImage();
});
searchButton.addEventListener("click", () => {
  addImage(searchInput.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addImage(searchInput.value);
});
