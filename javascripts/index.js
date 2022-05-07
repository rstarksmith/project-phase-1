// When the DOM loads

document.addEventListener('DOMContentLoaded', () => {

    displayBooksToDom()

})



// Node Getters
//nav bar
const throneOfGlass = document.getElementById('throne')
const acotar = document.getElementById('acotar')
const crescentCity = document.getElementById('crescent')
const fullCollection = document.getElementById('full-collect')
const headerLinks = document.querySelectorAll('.header-links')


//Event Listeners

function displayBooksToDom(){
headerLinks.forEach(addEventListener('click', listBySeries))
}


//Event Handlers

function listBySeries(e) {
    e.preventDefault()
    if(e.target === throneOfGlass) {
        alert('click throne')
    } else if (e.target === acotar) {
        alert('hi hi hi')
    } else if(e.target === crescentCity) {
        alert('city')
    } else {
        alert('full')
    }
}










