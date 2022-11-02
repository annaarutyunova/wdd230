let temperature = document.getElementById("temperature").textContent; // temp
let windSpeed = document.getElementById("ws").textContent; // wind speed
let windChill = document.getElementById("wc").textContent;

if(temperature <= 10 && windSpeed >= 4.8){
    let chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
    windChill = concat({chill}, "km/h");
    console.log(chill);
    console.log(windChill);
}
else{
    windChill = "N/A";
}

console.log(temperature);