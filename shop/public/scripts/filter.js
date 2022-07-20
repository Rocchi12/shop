// open and close fulteer and nav

const filt = document.querySelector('nav.filtersopen');
const shop = new Shop();


shop.getItems()
.then(function(data){shop.addItems(data);})
.catch(function(err){console.log(err);});

/*filter*/

const filter = document.querySelector('.filter-form');
const shopsel = document.querySelector('.shopnav ul');

filter.addEventListener('submit', function(e){
    e.preventDefault();

    // filter
    // get data
    shop.getItems()
    .then(function(data){shop.filterDel(data)})
    .catch(function(err){console.log(err);});



});

