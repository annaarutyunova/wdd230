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
        console.log(cats[rand].breed);
        // cats.forEach(displayCats);
        displayCats(cats[rand])
    }
       
}




function displayCats(item){
    let main = document.querySelector("main")
    let image = document.createElement("img");
    image.setAttribute('src', item.image)
    // image.setAttribute('src', "https://dummyimage.com/500x300/ccc/fff")
    image.setAttribute('alt', item.breed)
    main.appendChild(image);
}

// getCats(requestURL)

const rand = Math.floor(Math.random() * 29);
const button = document.querySelector("#generateBtn")
button.addEventListener("click", getCats(requestURL));