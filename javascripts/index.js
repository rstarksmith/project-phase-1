// When the DOM loads

document.addEventListener('DOMContentLoaded', () => {
    throneLinkEvent()  

})



// Node Getters
// nav bar
const throneOfGlass = document.getElementById('throne')
const acotar = document.getElementById('acotar')
const crescentCity = document.getElementById('crescent')
const fullCollection = document.getElementById('full-collect')
const headerLinks = document.querySelectorAll('.header-links')

// quote
const divQuote = document.getElementById('title-quote')
const h6 = document.createElement('h6')
h6.className = 'quote'
h6.id = 'quote-line'
h6.innerText = '\"To the stars who listen and the dreams that are answered\"'
//rotatingQuote // add function or set quote
const p = document.createElement('p')
p.className = "quote"
p.id = 'quote-cite'
p.innerText = '-A Court of Mist and Fury'
// rotatingQuote // add function or set quote cite
divQuote.append(h6, p)




// Event Listeners
const throneLinkEvent = () => {
    throneOfGlass.addEventListener('click', loadThroneToDom)
}
const acotarLinkEvent = () => {
    acotar.addEventListener('click', loadAcotarToDom)
}
const crescentLinkEvent = () => {
    crescentCity.addEventListener('click', loadCrescentToDom)
}
const fullLinkEvent = () => {
    fullCollection.addEventListener('click', loadFullToDom)
}


// Event Handlers

const loadThroneToDom = (e) => {
    e.preventDefault()
    alert('hi')
}



// function getBooks() {
//     fetch('http://localhost:3000/books')
//     .then(resp => resp.json())
//     .then(resp => resp.filter(book => {
//         return book.series === "Throne of Glass"}))
// }









// //targets clicks on links

// displayBooksToDom()

// function displayBooksToDom(){
// headerLinks.forEach(addEventListener('click', listBySeries))
// }

// function listBySeries(e) {
//     e.preventDefault()
//     if(e.target === throneOfGlass) {
//         alert('click throne')
//     } else if (e.target === acotar) {
//         alert('hi hi hi')
//     } else if(e.target === crescentCity) {
//         alert('city')
//     } else if(e.target === fullCollection) {
//         alert('full')
//     }
// }










