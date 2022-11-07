//  ASYNC AWAIT FETCH
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";


function displayProphets(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');

    h2.textContent = item.name + ' ' + item.lastname;
    img.setAttribute('src', item.imageurl);

    card.appendChild(h2);
    document.querySelector('.cards').appendChild(card);
}

// only use "await" with "async"
async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok){
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets = jsObject['prophets'];
        console.log(prophets[16].lastname);
        prophets.forEach(displayProphets);
    }
}

getProphets(requestURL);