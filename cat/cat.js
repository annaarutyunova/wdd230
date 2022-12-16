const requestURL = "https://annaarutyunova.github.io/wdd230/cat/cat.json";
const request = "https://raw.githubusercontent.com/annaarutyunova/wdd230/main/cat/cat.json";
let cats = [];


async function getCats(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        cats = jsObject["cats"];
        console.log(cats[0].breed);
    }
}


getCats(requestURL);