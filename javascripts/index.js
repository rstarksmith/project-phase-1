// When the DOM loads

document.addEventListener('DOMContentLoaded', () => { 
    quoteChange()
    getBooks() 
    
})


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
const divHeader = document.getElementById('header')
const imageHeader = document.getElementById('title')

const h6 = document.createElement('h6')
const p = document.createElement('p')

const quoteArray = ['\"To the stars who listen and the dreams that are answered\"', '\'Libraries were full of ideas - perhaps the most dangerous and powerful of all weapons.\"']
const citeArray = ['-A Court of Mist and Fury','-Throne of Glass']


h6.className = 'quote'
h6.id = 'quote-line'
h6.style.transition = 'all 1s'
h6.style.cursor = 'pointer'
h6.textContent = quoteArray[0]

p.className = "quote"
p.id = 'quote-cite'
p.style.cursor = 'pointer'
p.textContent = citeArray[0]
divQuote.append(h6, p)


function quoteChange(){
    divQuote.addEventListener('mouseover', () => {
        h6.style.color = '#009688'
    })
    divQuote.addEventListener('mouseout', () => {
        h6.style.color = 'white'
    })
    divQuote.addEventListener('dblclick', () => {
        if(h6.textContent === quoteArray[0]) {
            h6.textContent = quoteArray[1]
            p.textContent = citeArray[1] 
        }else {
            h6.textContent = quoteArray[0]
            p.textContent = citeArray[0] 
        }
    })  
}


//to clear card container ** can change if not used again
const resetContent = (element) => {
    element.innerHTML = ''
}
const resetCardContainer = () => {
    cardContainer.innerHTML = ''
}



// Event Listeners


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
    
    // const divRow = document.createElement('div')
    const divCol = document.createElement('div')
    const divCard = document.createElement('div')
    const divImage = document.createElement('div')
    const image = document.createElement('img')
    const divContent = document.createElement('div')
    const pSeriesName = document.createElement('p')
    const pBookOrder = document.createElement('p')
    


    // divRow.className = 'row'
    divCol.className = 'col s12 m6 l3'
    divCard.className = 'card'
    divImage.className = 'div-image'
    image.className = 'book-image'
    divContent.className = 'card-content'
    pSeriesName.className = 'series'
    pBookOrder.className = 'book-order'

    image.src = book.img
    pSeriesName.textContent = book.series
    pBookOrder.textContent = book.order

    divImage.appendChild(image)
    divContent.appendChild(pSeriesName)
    divContent.appendChild(pBookOrder)

    divCard.appendChild(divImage)
    divCard.appendChild(divContent)

    cardContainer.append(divCol)
    // divRow.append(divCol)
    divCol.append(divCard)

    return divCard 
}

//renderBooks would replace create a card in the fetch for each method
// Do i need this?
// function renderBooks (book){
//     const divCol = document.createElement('div')
//     divCol.className = 'col s12 m7'
//     divCol.appendChild(createBookCard())
//     return divCol
// }


//HTML CARD LAYOUT
        // <div class="row">
            // <div class="col s12 m6 l4">
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
