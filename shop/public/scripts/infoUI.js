const name1 = document.querySelector('#name');
const price = document.querySelector('#price');
const desc = document.querySelector('#discription');
const img = document.querySelector('div.itemInf img');

const stored = JSON.parse(localStorage.getItem('item'));

function displayItems(stored){
    name1.textContent = stored.name
    price.textContent = stored.price
    desc.textContent = stored.info
    
    img.setAttribute('src', stored.img);
}

displayItems(stored)