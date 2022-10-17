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

 