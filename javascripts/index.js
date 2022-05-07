// When the DOM loads

document.addEventListener('DOMContentLoaded', () => {
    getBooks()
    // displayBooksToDom()

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
headerLinks.forEach(addEventListener('click', (e) => listBySeries))
}


//Event Handlers

function getBooks() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(resp => resp.filter(book => {book.series === "Throne of Glass"}))
}

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










