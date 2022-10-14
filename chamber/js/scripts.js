let date = new Date();
let currentDate = document.lastModified;
let year = date.getFullYear();
document.querySelector('.modified').textContent = currentDate;
document.querySelector('.year').textContent = year;
console.log(currentDate);
console.log(year);

function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
}

 const x = document.getElementById('hamburgerBtn');
 x.onclick = toggleMenu;

 