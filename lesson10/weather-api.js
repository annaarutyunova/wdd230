// 35a610c9756d2a6a4ee1454748ffe942
// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
/* 5780993 */

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&appid=35a610c9756d2a6a4ee1454748ffe942";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();