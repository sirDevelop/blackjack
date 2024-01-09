import { useState, useEffect } from 'react'

const CardCountingHiLo = () => {
	const [availableCards, setAvailableCards] = useState(['D:2', "C:2", "S:2", "H:2", '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'])

	// ["Diamond","Clover","Spade","Heart"].map((suit) => {
	// 	setAvailableCards
	// })
	
	// deck = {'Diamonds': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
	// 'Clovers': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
	// 'Spades': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
	// 'Hearts': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']}

	const [decks, setDecks] = useState([])

		//randomly remove 1 from deck
		//randomly remove another from deck
	availableCards[0] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
	// availableCards[1]
	useEffect(() => {
		const MakeTheDecks = () => {
			
		}
		const showCardsInterval = setInterval(() => {
			// show cards
		}, 4000);

		// return runs when component dismounts
		return () => {
			// every time they refresh and come back to the screen, they start a freesh game
			clearInterval(showCardsInterval)
		}
	}, [])
	return (
		<div>CardCountingHiLo
			
		</div>
	)
}

export default CardCountingHiLo