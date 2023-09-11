'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name:'elephant',
            img: 'images/elefante.jpeg'
        },
        {
            name:'lion',
            img: 'images/leon.jpeg'
        },
        {
            name:'snake',
            img: 'images/serpiente.avif'
        },
        {
            name:'monkey',
            img: 'images/mono.avif'
        },
        {
            name:'hipo',
            img: 'images/hipo.png'
        },
        {
            name:'elephant',
            img: 'images/elefante.jpeg'
        },
        {
            name:'lion',
            img: 'images/leon.jpeg'
        },
        {
            name:'snake',
            img: 'images/serpiente.avif'
        },
        {
            name:'monkey',
            img: 'images/mono.avif'
        },
        {
            name:'hipo',
            img: 'images/hipo.png'
        },
        {
            name:'jiraf',
            img: 'images/jirafa.avif'
        },
        {
            name:'jiraf',
            img: 'images/jirafa.avif'
        }
    ] 

    cardArray.sort(() => 0.5 - Math.random())
    var cardsChoosen = []
    var cardsChoosenId = []
    var cardsWon = []
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('result')
    function createBoard () {
        for (let i=0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/carta.jpeg')
            card.setAttribute('class','card')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    createBoard()
    function checkForMatch () {
        var card = document.querySelectorAll('img')
        const optoinOneId = cardsChoosenId[0]
        const optoinTwoId = cardsChoosenId[1]
        if (cardsChoosen[0] === cardsChoosen[1]){
            alert ('Has encontrado una coincidencia!')
            cards[optoinOneId].setAttribute('src','images/blanco.jpeg')
            cards[optoinTwoId].setAttribute ('src', 'images/blanco.jpeg')
            cardsWon.push(cardsChoosen)
        } else {
            cards[optoinOneId].setAttribute('src','images/carta.jpeg')
            cards[optoinTwoId].setAttribute('src','images/carta.jpeg')
            alert ('Lo siento! Inténtalo de nuevo.')
        }
        cardsChoosen = []
        cardsChoosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Enhorabuena! Has encontrado todas las parejas!'
        }
    }
    function flipcard (ev) {
        ev.preventDefault()
        var cardId = this.getAttribute('data-id')
        cardChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChoosen.length === 2 ){
            setTimeout (checkForMatch, 500)
        }
    }

})