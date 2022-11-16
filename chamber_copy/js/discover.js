// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
//     }

//     img.src = src;
// }

// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -500px 0px"
// }

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             preloadingImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// });

const image = document.querySelectorAll('img');
const options = {
    threshold: 1,
    rootMargin:"0px 0px 100px 0px"
}

const placeholder = document.querySelectorAll('[data-src]');

function preloadingImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }

    img.src = source;
    }

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                preloadingImage(entry.target);
                io.unobserve(entry.target) // target tells us which image we are on
            }
        })
    },
    {
        options
    }
);

placeholder.forEach(item => {
    io.observe(item);
})


// Local Storage

if(!localStorage.getItem('lastvisit')){
    localStorage.getItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
} else{
    setStyles();
}

function setStyles(){
    let prevDate = localStorage.getItem('lastvisit');
    let currentDate = Data.now();

    let difference = currentDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);
    document.getElementById('diff').textContent(daysDifference);
    localStorage.setItem('lastvisit', Date.now());

}