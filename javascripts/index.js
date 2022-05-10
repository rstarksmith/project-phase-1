// When the DOM loads

document.addEventListener('DOMContentLoaded', () => {
    throneLinkEvent() 
    getBooks() 

})



// Node Getters
//** Nav bar */
const throneOfGlass = document.getElementById('throne')
const acotar = document.getElementById('acotar')
const crescentCity = document.getElementById('crescent')
const fullCollection = document.getElementById('full-collect')
const headerLinks = document.querySelectorAll('.header-links')


//** Quote */
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


//** Card */
const cardContainer = document.getElementById('card-container')
//to clear card container
// const resetCardContainer = () => {
//     cardContainer.innerHTML = ''
// }








// Event Listeners
const throneLinkEvent = () => {
    throneOfGlass.addEventListener('click', renderBooksToDom)
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

const renderBooksToDom = (e) => {
    e.preventDefault()
    // resetCardContainer()

    alert('hi')
}



function getBooks() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(resp => {
        const throneArray = resp.filter(book => book.series === 'Throne of Glass')
        console.log(throneArray)
        const acotarArray = resp.filter(book => book.series === 'ACOTAR')
        console.log(acotarArray)
        const crescentArray = resp.filter(book => book.series === 'Crescent City')
        console.log(crescentArray)
        const fullArray = resp
        console.log(fullArray)
    })
}

function createBookCard (book) {
    const divCol = document.createElement('div')
    const divCard = document.createElement('div')
    const divImage = document.createElement('img')
    const divContent = document.createElement('div')
    const pSeriesName = document.createElement('p')
    const pBookOrder = document.createElement('p')

    divCol.className = 'col s12 m6'
    divCard.className = 'card'
    divImage.className = 'book-image'
    divContent.className = 'card-content'
    pSeriesName.className = 'series'
    pBookOrder.className = 'book-order'

    divImage.src = book.div
    pSeriesName.textContent = book.series
    pBookOrder.textContent = book.order

}

            // <div class="col s12 m6">
            //     <div class="card">
            //         <div class="card-image">
            //             <img class="book-image" src="https://i.guim.co.uk/img/media/25a46c1123f57901456105b462b183d117fae044/0_0_260_400/master/260.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=a966fe653671452eeead1d9a32dabd1c">
            //         </div>
            //         <div class="card-content">
            //             <p class="series">Series Name</p>
            //             <p class="book-order">1 of 2</p>
            //         </div>
            //     </div>
            // </div>










// //targets clicks on links *keep out unless needed

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










