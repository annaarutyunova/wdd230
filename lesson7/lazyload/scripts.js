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

localStorage.setItem('msg1', 'Hello Permanent');
localStorage.setItem('visit', Date.now());
sessionStorage.setItem('msg2', 'Hi Temporary');

let message = localStorage.getItem('msg1');
let visitDate = localStorage.getItem('visitDate');
console.log(visitDate);


// Difference in day between two dates (or last time they visited)

// if(!something in local storage){
// set localstorage today's date
// "This is your 1st visit"
// }
// else{
// get locatlstorage value
// subtract 2 dates today and previous storage
// set thenewdate in local storage
// }



// let prevDate = 
// let currentDate = Date.now();