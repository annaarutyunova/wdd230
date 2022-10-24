let date = new Date();
let dateint = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
let currentDate = document.lastModified;
let year = date.getFullYear();
document.querySelector('.modified').textContent = currentDate;
document.querySelector('.year').textContent = year;
console.log(currentDate);
console.log(year);
document.querySelector("#datep").textContent = dateint;

function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


// let message = getElementById("message");
let day = date.getDay();
let message = document.getElementById("message");
if(day == 1){
    message.style.display == "block";
    day = "Monday";
    document.getElementById("day").textContent = day; 
}
else if(day == 3){
    day = "Wednesday";
    document.getElementById("day").textContent = day; 
}
else if(day ==  0 || 4 || 5 || 6){
    
    document.getElementById("message").style.display = "hidden"; 
}




 