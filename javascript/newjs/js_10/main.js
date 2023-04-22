//
// api + '&q=tên_thành_phố' để có thể lấy ra data
//
// data.cod === '404' -> k tìm thấy địa điểm
//
// bài tập làm ở đây

//
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=9b5a648d8ac9f1a52e52001da54a7129";

const main = document.querySelector("main");
const buttonSearch = main.querySelector(".form button");

const images = document.querySelector(".image");
const tempeture = document.querySelector(".tempeture");
const locationTem = document.querySelector(".location");
const detail = document.querySelector(".detail");

// buttonSearch.addEventListener("click", () => {
//   const location = main.querySelector(".form input").value;
//   if (location) {
//     getWeather({ location: location });
//   } else {
//     alert("Vui lòng nhập tên địa điểm muốn tìm kiếm");
//     return false;
//   }
// });

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const location = main.querySelector(".form input").value;
    if (location) {
      getWeather({ location: location });
    } else {
      alert("Vui lòng nhập tên địa điểm muốn tìm kiếm");
      return false;
    }
  }
});

async function getWeather(params) {
  let { location } = params;
  const response = await fetch(api_url + `&q=${location}`);
  const data = await response.json();
  console.log(data);

  await resetDom();
  await generateWeather(data);
}

async function generateWeather(params) {
  if (params.cod == "404") {
    images.innerHTML = "Không có thành phố tương ứng";
    return false;
  }

  const cityName = params.name;
  const currentTemp = params.main.temp;
  const currentFell = params.main.feels_like;
  tempeture.innerHTML = currentTemp + "°C";
  locationTem.innerHTML = cityName + " / " + "Feel like " + currentFell + "°C";

  const dataImage = params.weather[0].main;
  const imageCity = document.createElement("img");
  imageCity.classList.add("weather-icon");
  if (dataImage === "Clouds") {
    imageCity.setAttribute("src", "./images/cloudy.png");
    images.appendChild(imageCity);
  }
  if (dataImage === "Rain") {
    imageCity.setAttribute("src", "./images/heavy_rain.png");
    images.appendChild(imageCity);
  }

  const humidity = params.main.humidity;
  const windSpeed = params.wind.speed;
  const text = document.createElement("p");
  const dbText = document.createElement("p");
  text.innerHTML = `<span><i class="fas fa-water"></i>Humidity</span>
  ${humidity}`;
  detail.appendChild(text);
  dbText.innerHTML = `<span><i class="fas fa-wind"></i> Wind speed</span>
  ${windSpeed}`;
  detail.appendChild(dbText);
}

function resetDom() {
  images.innerHTML = "";
  tempeture.innerHTML = "";
  locationTem.innerHTML = "";
  detail.innerHTML = "";
  const imageCity = document.querySelector(".weather-icon");
  if (imageCity) {
    images.removeChild(imageCity);
  }
}
