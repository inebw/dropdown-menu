import "./styles.css";

const img = document.querySelector("img");
const params = new URLSearchParams();
params.append("api_key", "UG2Rfo0dLmELewpayLFF56JS6bhSV3Pz");
params.append("s", "shiba");
const fetchURL =
  `https://api.giphy.com/v1/gifs/translate?${params}`;

fetch(fetchURL)
  .then((response) => {
    if (!response.ok) throw new Error('what the heck')
    return response.json()
  })
  .then((response) => {
    img.src = response.data.images.original.url;
  })
  .catch((error) => {
    img.alt = 'some error happened'
    console.log(error)
  })
