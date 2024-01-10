import { useState, useEffect } from 'react'

// player's 2 cards
// dealerFaceUpCard is dealer's card

// cards is JSON object
// {}

const CardCountingHiLo = () => {
	const [templateDeck, setTemplateDeck] = useState(['Diamond:2', 'Diamond:3', 'Diamond:4', 'Diamond:5', 'Diamond:6', 'Diamond:7', 'Diamond:8', 'Diamond:9', 'Diamond:10', 'Diamond:J', 'Diamond:Q', 'Diamond:K', 'Diamond:A', 'Clover:2', 'Clover:3', 'Clover:4', 'Clover:5', 'Clover:6', 'Clover:7', 'Clover:8', 'Clover:9', 'Clover:10', 'Clover:J', 'Clover:Q', 'Clover:K', 'Clover:A', 'Spade:2', 'Spade:3', 'Spade:4', 'Spade:5', 'Spade:6', 'Spade:7', 'Spade:8', 'Spade:9', 'Spade:10', 'Spade:J', 'Spade:Q', 'Spade:K', 'Spade:A', 'Heart:2', 'Heart:3', 'Heart:4', 'Heart:5', 'Heart:6', 'Heart:7', 'Heart:8', 'Heart:9', 'Heart:10', 'Heart:J', 'Heart:Q', 'Heart:K', 'Heart:A'])
	const [decks, setDecks] = useState()
	const [hands, setHands] = useState([])

	const BasicStrategy = new Map();
	const PairSplitting = new Map();
	//favor the soft totals first

	// 2,3,4,5,6,7,8,9,10,A
	BasicStrategy.set([1,2], ['H','H','H','D','D','H','H','H','H','H'])
	BasicStrategy.set([1,3], ['H','H','H','D','D','H','H','H','H','H'])
	BasicStrategy.set([1,4], ['H','H','D','D','D','H','H','H','H','H'])
	BasicStrategy.set([1,5], ['H','H','D','D','D','H','H','H','H','H'])
	BasicStrategy.set([1,6], ['H','D','D','D','D','H','H','H','H','H'])
	BasicStrategy.set([1,7], ['D','D','D','D','D','S','S','H','H','H'])
	BasicStrategy.set([1,8], ['S','S','S','S','D','S','S','S','S','S'])
	BasicStrategy.set([1,9], ['S','S','S','S','S','S','S','S','S','S'])

	BasicStrategy.set(4, ['H','H','H','H','H','H','H','H','H','H'])
	BasicStrategy.set(5, ['H','H','H','H','H','H','H','H','H','H'])
	BasicStrategy.set(6, ['H','H','H','H','H','H','H','H','H','H'])
	BasicStrategy.set(7, ['H','H','H','H','H','H','H','H','H','H'])
	BasicStrategy.set(8, ['H','H','H','H','H','H','H','H','H','H'])
	BasicStrategy.set(9, ['H','D','D','D','D','H','H','H','H','H'])

	BasicStrategy.set(10, ['D','D','D','D','D','D','D','D','H','H'])
	BasicStrategy.set(11, ['D','D','D','D','D','D','D','D','D','D'])
	BasicStrategy.set(12, ['H','H','S','S','S','H','H','H','H','H'])
	BasicStrategy.set(13, ['S','S','S','S','S','H','H','H','H','H'])
	BasicStrategy.set(14, ['S','S','S','S','S','H','H','H','H','H'])
	BasicStrategy.set(15, ['S','S','S','S','S','H','H','H','H','H'])
	BasicStrategy.set(16, ['S','S','S','S','S','H','H','H','H','H'])
	// 17 and above just stand

	PairSplitting.set(['A', 'A'], ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'])
	PairSplitting.set(['T', 'T'], ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'])
	PairSplitting.set(['9', '9'], ['Y', 'Y', 'Y', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'N'])
	PairSplitting.set(['8', '8'], ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'])
	PairSplitting.set(['7', '7'], ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N'])
	PairSplitting.set(['6', '6'], ['Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N', 'N'])
	PairSplitting.set(['5', '5'], ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'])
	PairSplitting.set(['4', '4'], ['N', 'N', 'N', 'Y/N', 'Y/N', 'N', 'N', 'N', 'N', 'N'])
	PairSplitting.set(['3', '3'], ['Y/N', 'Y/N', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N'])
	PairSplitting.set(['2', '2'], ['Y/N', 'Y/N', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N'])

	const extractNum = (card) => {
		
		if(['J','Q','K'].indexOf(card.split(":")[1]) !== -1) {
			return 10
		} else if (card.split(":")[1] === 'A') {
			return 1
		} else {
			return parseInt(card.split(":")[1])
		}
	}
// 	runBasicStrategyOnHand(player1)
// 	runBasicStrategyOnHand(player2)
// 	...
// runBasicStrategyOnHand(dealer)

const runBasicStrategyOnHand = (playerHand, dealerHand, role) => {
	
	let hand = role === 'player'? playerHand.sort(): dealerHand.sort();

	// (extractNum(hand[0]) === 1 || extractNum(hand[1]) === 1) && extractNum(hand[0] + extractNum(hand[1] === 11 // cards = A,10 or 10,A
	if (extractNum(hand[0]) === 1 && extractNum(hand[1]) === 10) {
		// A 10
		// 10 A
		// blackjack
		// whoever got this won
		return { ...hand, win: "true" }
	}
	
	let currentSum = extractNum(hand[0]) + extractNum(hand[1])

	if (role === 'dealer') {
		// does depend on S17, H17 game
		// while dealer has less than 17 total keep hitting
		while (currentSum < 17) {
			const randNum = Math.floor((Math.random() * decks.length + 1) + 1);
			const newCard = decks[randNum]
			setDecks((decks) => [...decks.filter((_, i) => i !== randNum)])
			hand = { ...hand, newCard }
			currentSum += extractNum(newCard)
		}
	} else if (role === 'player') {
		// dealer face up card is first one
		const dealerUpCard = extractNum(dealerHand[0])
		const decisionIndex = dealerUpCard != 1 ? dealerUpCard - 2: 9
		if(extractNum(hand[0]) ==='1') {
			// soft total
			const decision = BasicStrategy.get(hand)[decisionIndex]
		} else {
			const decision = BasicStrategy.get(currentSum)[decisionIndex]
		}
		while(currentSum < 17) {
		
		}
		


	}


	if (currentSum > 21) {
		return { ...hand, lose: "true" }
	} else {

	}
	// return player Sum (2,3,4,5,5)
	// if sum > 21 -> player loses
	// if sum < 21 you have to compare to dealer's hand
	//return winner
	//  {won: player, { }, { }}
}

// role = player / dealer
const generateHand = (role, numberOfPlayers) => {

	let hands = {}
	for (let roundIndex = 1; roundIndex <= 2; roundIndex++) {
		const dealerRandNum = Math.floor((Math.random() * decks.length + 1) + 1);
		const dealerCard = decks[dealerRandNum]
		//remove the card from deck
		setDecks((decks) => [...decks.filter((_, i) => i !== dealerRandNum)])
		hands = { ...hands, dealer: [...hands.dealer, dealerCard] }
		for (let i = 1; i <= numberOfPlayers; i++) {
			const randNum = Math.floor((Math.random() * decks.length + 1) + 1);
			const card = decks[randNum]
			//remove the card from deck
			setDecks((decks) => [...decks.filter((_, i) => i !== randNum)])
			hands = { ...hands, ["player" + i]: [...hands["player" + i], card] }
		}
	}

	setHands(hands)
}

const createDecks = (numDecks) => {
	let deck_tmp = []
	for (let i = 0; i < numDecks; i++) {
		deck_tmp.push(...templateDeck)
	}
	setDecks(deck_tmp)
}
useEffect(() => {
	createDecks(6)
	// setHands(generateHand("Player"))
	// setHands(generateHand("Player"))

	//keep asking until 17 or more
	//Dealer: 2, 2,10,10

	//input {2,2}
	// BasicStrategy(dealerHand)
	//return 2, 2, 5, 5, 10

	//Player 2,2, 2, 5,5

	// Dealer 9, _
	//Player 10,8

	// card counting => if sum is large, we should bet more
	// $40

	//Player1  3,10, 10         $10 - $10 = $0
	// player2  4, 10, 4        $20 + $20 = $40
	// dealer  10, 7            took $10 from player1, paid player2 $10

}, [])

// 2 cards to player
// 1 card from 2 cards of dealer
// if(playerSum < 17) 1 more card

// playerSum = 16, dealer shows 2, Player should not take another card
//playerSUm = 16, dealers face up card is 10, player should hit
//player cards is 2 and 3
//2,3,4,5,5 => stop

// const SUITS = ["Diamond", "Clover", "Spade", "Heart"]
// let cards = []
// SUITS.map((suit) => {
// 	// console.log(1)
// 	for (let i = 2; i <= 10; i++) {
// 		cards.push(suit + ":" + i)
// 	}
// 	cards.push(suit + ":J")
// 	cards.push(suit + ":Q")
// 	cards.push(suit + ":K")
// 	cards.push(suit + ":A")
// })
// // console.log('cards', cards)

// useEffect(() => {
// 	setAvailableCards(availableCards => [...availableCards, ...cards])
// }, [])

// useEffect(() => {
// 	console.log(availableCards)
// }, [availableCards])


// deck = {'Diamonds': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
// 'Clovers': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
// 'Spades': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
// 'Hearts': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']}

// const [decks, setDecks] = useState([])

//randomly remove 1 from deck
//randomly remove another from deck
// availableCards[0] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// availableCards[1]
// useEffect(() => {
// 	const MakeTheDecks = () => {

// 	}
// 	const showCardsInterval = setInterval(() => {
// 		// show cards
// 	}, 4000);

// 	// return runs when component dismounts
// 	return () => {
// 		// every time they refresh and come back to the screen, they start a freesh game
// 		clearInterval(showCardsInterval)
// 	}
// }, [])
return (
	<div>CardCountingHiLo

	</div>
)
}

export default CardCountingHiLo