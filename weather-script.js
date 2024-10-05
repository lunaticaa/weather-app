const searchBtn = document.querySelector(".search-btn");
const cityInput = document.querySelector(".city-input");
const getCity = () => {
  const cityName = cityInput.ariaValueMax.trim();
  if(!cityName){
    console.log(cityName);
    
  }
};

searchBtn.addEventListener("click", getCity);
