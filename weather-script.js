const searchBtn = document.querySelector(".search-btn");
const cityInput = document.querySelector(".city-input");
const API_key = "61e2ffde6b78dcd0f35961896ab8ffdf";
const getCity = () => {
  const cityName = cityInput.value.trim();
  if (!cityName) return;
  const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`;
  fetch(GEOCODING_API_URL)
    .then((res) => res.json())
    .then((data) => {
      if (!data.length) return alert(`No coordintes found for ${cityName}`);
      const [name, lat, lon] = data[0];
    })
    .catch(() => {
      alert("an error ocurred while fetching file");
    });
};
searchBtn.addEventListener("click", getCity);
