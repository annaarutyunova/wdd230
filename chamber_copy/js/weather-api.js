// 35a610c9756d2a6a4ee1454748ffe942
// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
/* 5780993 */

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&appid=35a610c9756d2a6a4ee1454748ffe942";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log({jsObject});
    document.querySelector('#temperature').textContent = Math.round((jsObject.main.temp - 273.15)* 1.8000 + 32.00);
    console.log(jsObject.wind.speed);
    const speed = document.querySelector('#ws').textContent = jsObject.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();