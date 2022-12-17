const requestURL = "https://annaarutyunova.github.io/wdd230/cat/cat.json";
let cats = [];
const filter = {
    color: "",
    breed: ""
}


async function getCats(){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        cats = jsObject["cats"];
        console.log(cats[0].breed);
        document.getElementById("viewcatsul").innerHTML = "";
        cats.forEach(displayCat);
    }
}

function displayCat(item){
    if(item.color == filter.color || item.breed == filter.breed || (filter.breed == "" && filter.color == "")){
        let li = document.createElement("li");
        let image = document.createElement("img");
        image.setAttribute('src', item.image)
        // image.setAttribute('src', "https://dummyimage.com/500x300/ccc/fff")
        image.setAttribute('alt', item.breed)
        li.appendChild(image);
        document.getElementById("viewcatsul").appendChild(li);
    }
    

}

getCats();


const filterColor = document.querySelector("#filter-color")
filterColor.addEventListener("change", (ev) => {
    filter.color = ev.target.value
    getCats()
});


// Attempt to lazy load

// const image = document.querySelectorAll('img');
// const options = {
//     threshold: 1,
//     rootMargin:"0px 0px 100px 0px"
// }

// const placeholder = document.querySelectorAll('[data-src]');

// function preloadingImage(img){
//     const source = img.getAttribute('data-src');
//     if(!source){
//         return;
//     }

//     img.src = source;
//     }

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => {
//             if(!entry.isIntersecting){
//                 return;
//             }
//             else{
//                 preloadingImage(entry.target);
//                 io.unobserve(entry.target) // target tells us which image we are on
//             }
//         })
//     },
//     {
//         options
//     }
// );

// placeholder.forEach(item => {
//     io.observe(item);
// })