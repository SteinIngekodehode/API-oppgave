async function getWeather(event) {   /* async function for å kunne pause utføringa av funksjonen til "promiset" er oppfylt, ved bruk av "await"*/
    
    event.preventDefault()/*method for å unngå refresh/omdirigering til ny URL*/

    const cityInput = document.getElementById("city-input").value;
    const city = cityInput;
    console.log(city);
    const apiKey = "c9a40190192d19d4e3bbbe67853eb27c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   

    
    const response = await fetch(apiUrl);/* API request, venter på fullføring, */
    const data = await response.json();
   
    displayData(data);
}      

function displayData(data) {
  const dataContainer = document.getElementById("weatherData");     
  dataContainer.textContent = ""; // Tømmer tidligere innhold
  
  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  
  const cityElement = document.createElement("h2");
  cityElement.textContent = cityName;
  
  const temperatureElement = document.createElement("p");
  const convertToCelcius = ((5/9) * 32)
  temperatureElement.textContent = `Temperature: ${temperature / convertToCelcius.toFixed(2)}°C`;
  
  const descriptionElement = document.createElement("p");/*oppretter ein <p>*/
  descriptionElement.textContent = `Weather conditions: ${description}`;
  
  dataContainer.appendChild(cityElement);
  dataContainer.appendChild(temperatureElement);
  dataContainer.appendChild(descriptionElement);
}

const weatherForm = document.getElementById('weatherForm');
  weatherForm.addEventListener("submit", (event) => getWeather(event));
