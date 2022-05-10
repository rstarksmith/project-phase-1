// When the DOM loads

document.addEventListener('DOMContentLoaded', () => { 
    getBooks() 

})



// Node Getters
//** Nav bar */
const throneOfGlass = document.getElementById('throne')
const acotar = document.getElementById('acotar')
const crescentCity = document.getElementById('crescent')
const fullCollection = document.getElementById('full-collect')
const ulHeaderLinks = document.getElementById('nav-mobile')

//** Card */
const cardContainer = document.getElementById('card-container')


//** Quote */
const divQuote = document.getElementById('title-quote')
const h6 = document.createElement('h6')
const p = document.createElement('p')
h6.className = 'quote'
h6.id = 'quote-line'
h6.innerText = '\"To the stars who listen and the dreams that are answered\"'
p.className = "quote"
p.id = 'quote-cite'
p.innerText = '-A Court of Mist and Fury'
divQuote.append(h6, p)


//to clear card container
const resetCardContainer = () => {
    cardContainer.innerHTML = ''
}



// Event Listeners


// Event Handlers


function getBooks() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(resp => {
        const throneArray = resp.filter(book => book.series === 'Throne of Glass')
        const acotarArray = resp.filter(book => book.series === 'ACOTAR')
        const crescentArray = resp.filter(book => book.series === 'Crescent City')
        const fullArray = resp
        ulHeaderLinks.addEventListener('click', (e) => {
            e.preventDefault()
            resetCardContainer()
            if(e.target === throneOfGlass) {
                throneArray.forEach(book => createBookCard(book))
            } else if (e.target === acotar) {
                acotarArray.forEach(book => createBookCard(book))
            } else if(e.target === crescentCity) {
                crescentArray.forEach(book => createBookCard(book))
            } else if(e.target === fullCollection) {
                fullArray.forEach(book => createBookCard(book))
            }
        })
    })
}


function createBookCard (book) {
    const divRow = document.createElement('div')
    const divCol = document.createElement('div')
    const divCard = document.createElement('div')
    const divImage = document.createElement('div')
    const image = document.createElement('img')
    const divContent = document.createElement('div')
    const pSeriesName = document.createElement('p')
    const pBookOrder = document.createElement('p')

    divRow.className = 'row'
    divCol.className = 'col s1 m2 l4'
    divCard.className = 'card'
    divImage.className = 'book-image'
    divContent.className = 'card-content'
    pSeriesName.className = 'series'
    pBookOrder.className = 'book-order'

    divImage.appendChild(image)
    divContent.appendChild(pSeriesName)
    divContent.appendChild(pBookOrder)
    divCard.appendChild(divImage)
    divCard.appendChild(divContent)
    cardContainer.append(divRow, divCol)
    cardContainer.appendChild(divCard)
    
    image.src = book.img
    pSeriesName.textContent = book.series
    pBookOrder.textContent = book.order
}

//HTML CARD LAYOUT
        // <div class="row">
            // <div class="col s12 m6">
            //     <div class="card">
            //         <div class="card-image">
            //             <img class="book-image" src="https://i.guim.co.uk/img">
            //         </div>
            //         <div class="card-content">
            //             <p class="series">Series Name</p>
            //             <p class="book-order">1 of 2</p>
            //         </div>
            //     </div>
            // </div>
        // </div>




// //Refactored

 // throneOfGlass.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     resetCardContainer()
        //     throneArray.forEach(book => createBookCard(book))
        // })
        // acotar.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     resetCardContainer()
        //     acotarArray.forEach(book => createBookCard(book))
        // })
        // crescentCity.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     resetCardContainer()
        //     crescentArray.forEach(book => createBookCard(book))
        // })
        // fullCollection.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     resetCardContainer()
        //     fullArray.forEach(book => createBookCard(book))
        // })
