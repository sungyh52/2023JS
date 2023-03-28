const API_KEY = "8e701f3c7e7b1c5776e0ccde0c239e68";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weatherTemp.innerText = data.name + "," + parseInt(data.main.temp) + "°C";

      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }),
    () => alert("Not allowed!");
});
