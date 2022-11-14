const requestURL = "https://annaarutyunova.github.io/wdd230/chamber_copy/data.json";

function displayBusinesses(item){
    let business = document.createElement('div');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    name.textContent = item.name;
    image.setAttribute('src', item.imageurl);
    image.setAttribute('alt', item.name);
    phone.textContent = item.phone;
    address.textContent = item.address;

    business.appendChild(name);
    business.appendChild(image);
    business.appendChild(phone);
    business.appendChild(address);
    document.getElementById('directory').appendChild(business);
}

async function getBusiness(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        console.log(businesses[0].name);
        businesses.forEach(displayBusinesses);
    }
}

getBusiness(requestURL);