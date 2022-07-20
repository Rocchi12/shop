const but = document.querySelector('div.openbutton');
const navi = document.querySelector('nav.sidebar');
const openNav = function(){
    navi.style.display = 'inline';
}

const closeNav = function(){
    navi.style.display = 'none';
}
const openFilter = function(){
    but.style.display = 'none'
    filt.style.display = 'block';
    
}
const closeFilter = function(){
    but.style.display = 'inline'
    filt.style.display = 'none';
}