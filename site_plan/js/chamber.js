let date = new Date();
let currentDate = document.lastModified;
let year = date.getFullYear();
document.querySelector('.modified').textContent = currentDate;
document.querySelector('.year').textContent = year;