const requestURL = "https://annaarutyunova.github.io/wdd230/chamber_copy/data.json";

let businesses = [];

function displayBusinesses(item){
    let business = document.createElement('div');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let siteurl = document.createElement('p');
    console.log({item})
    name.textContent = item.name;
    image.setAttribute('src', item.imageurl);
    image.setAttribute('alt', item.name);
    phone.textContent = item.phone;
    address.textContent = item.address;
    siteurl.textContent = item.siteurl;

    business.appendChild(name);
    business.appendChild(image);
    business.appendChild(phone);
    business.appendChild(address);
    business.appendChild(siteurl);
    document.getElementById('directory').appendChild(business);
}

function displayBusList(item){
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let site = document.createElement('td');
    console.log({item});
    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    site.textContent = item.siteurl;

    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(site);
    tbody.appendChild(row);
    table.appendChild(tbody); 
    document.getElementById('directory').appendChild(table); 
}

async function getBusiness(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        businesses = jsObject['businesses'];
        console.log(businesses[0].name);
        // businesses.forEach(displayBusinesses);
    }
}

let table = document.getElementById('table');
let list = document.getElementById('list');
table.addEventListener('click', showBusCards);
list.addEventListener('click', showBusList);

function clear(){
    document.getElementById('directory').innerHTML = "";
}

async function showBusList(){
    clear();
    if (businesses.length == 0){
        await getBusiness(requestURL);
    }
    console.log({businesses});
    businesses.forEach(item => displayBusList(item));
}

async function showBusCards(){
    clear();
    if (businesses.length == 0){
        await getBusiness(requestURL);
    }
    businesses.forEach(item => displayBusinesses(item));
}

showBusCards();