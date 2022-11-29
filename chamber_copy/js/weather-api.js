// 35a610c9756d2a6a4ee1454748ffe942
// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
/* 5780993 */

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&appid=35a610c9756d2a6a4ee1454748ffe942";


const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log({jsObject});
    document.querySelector('#temperature').innerHTML = Math.round((jsObject.main.temp - 273.15)* 1.8000 + 32.00) + "&deg;";
    const speed = document.querySelector('#ws').innerHTML = jsObject.wind.speed + " km/h";
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    // document.querySelector('figcaption').textContent = desc;
    let temperature = parseInt(document.getElementById("temperature").textContent); // temp
    let windSpeed = parseFloat(document.getElementById("ws").textContent); // wind speed
    let windChill = document.getElementById("wc").textContent;
    if(temperature <= 50 && windSpeed >= 2){
      let chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
      windChill = `${chill} &deg;`;
      document.getElementById("wc").innerHTML = windChill;
      console.log(chill);
      console.log(windChill);
    }
    else{
      windChill = "N/A";
    }
  
  console.log(temperature);
  };
getWeather();