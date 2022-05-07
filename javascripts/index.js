// When the DOM loads

document.addEventListener('DOMContentLoaded', () => {

    displayBooks()

})



// Node Getters
//nav bar
const throneOfGlass = document.getElementById('throne')
const acotar = document.getElementById('acotar')
const crescentCity = document.getElementById('crescent')
const fullCollection = document.getElementById('full-collect')
const headerLinks = document.querySelectorAll('.header-links')


//Event Listeners

function displayBooks(){
headerLinks.forEach(addEventListener('click', listSeriesToDom))
}


//Event Handlers

function listSeriesToDom () {
    alert('i was clicked')

}










