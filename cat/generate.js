const requestURL = "https://annaarutyunova.github.io/wdd230/cat/cat.json";
let cats = [];


async function getCats(){
    const response = await fetch(requestURL);
    const rand = Math.floor(Math.random() * 29);
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
    main.innerHTML = "";
    main.appendChild(image);
}
getCats()


const button = document.querySelector("#generateBtn")
button.addEventListener("click", getCats);