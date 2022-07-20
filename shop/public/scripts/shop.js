class Shop{
    constructor(database){
        this.items = 'http://localhost:3000/items';
    }
    async getItems(){
        const base = await fetch(this.items);
        const data = await base.json();
        return data;
    };

    filterDel(data){
        /*loops through each instance of data and filters out all the items that do not meet the requiremnts (type of meat)*/
        const list = document.querySelector('.shopnav ul');
        shopsel.innerHTML = ``
        data.forEach(function(item){
            const store = JSON.stringify(item);
            if (filter.sausage.checked == true && item.type == "sausage"){
                list.innerHTML += `
                <a id='hov' href='/info' onclick='shop.storeItem(${store});'><li class=${item.type}>
                    <img src="${item.img}" alt="${item.name}">
        
                    <h5>${item.name}</h5>
                    <p class="price">${item.price}</p>
                    <p class="info">
                        ${item.info}</p>
        
                </li></a>
                `
            }
            if (filter.chicken.checked == true && item.type == "chicken"){
                list.innerHTML += `
                <a id='hov' href='/info' onclick='shop.storeItem(${store});'><li class=${item.type}>
                    <img src="${item.img}" alt="${item.name}">
        
                    <h5>${item.name}</h5>
                    <p class="price">${item.price}</p>
                    <p class="info">
                        ${item.info}</p>
        
                </li></a>
                `
            }
            if (filter.beef.checked == true && item.type == 'beef'){
                list.innerHTML += `
                <a id='hov' href='/info' onclick='shop.storeItem(${store});'><li class=${item.type}>
                    <img src="${item.img}" alt="${item.name}">
        
                    <h5>${item.name}</h5>
                    <p class="price">${item.price}</p>
                    <p class="info">
                        ${item.info}</p>
        
                </li></a>
                `
            }
        });
        return(this);
    }

    addItems(data){
        /* adds items to the display of the website*/
        const list = document.querySelector('.shopnav ul');
        const image = document.querySelector('.shopnav ul');
        data.forEach(function(item){
            const store = JSON.stringify(item)
            list.innerHTML += `
            <a id='hov' href='/info' onclick='shop.storeItem(${store});'><li class=${item.type}>
                <img src="${item.img}" alt="${item.name}">
    
                <h5>${item.name}</h5>
                <p class="price">${item.price}</p>
                <p class="info">
                    ${item.info}</p>
    
            </li></a>
            `
            return(this);
        });
    };
    storeItem(item){
        const store = JSON.stringify(item);
        localStorage.setItem('item', store)
    }
}