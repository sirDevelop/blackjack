import parse from 'html-react-parser';

import { Container, Row, Col, Card } from "react-bootstrap"

const About = () => {
	const sectionInfo = [{
		heading: "Mastering the Art of Card Counting: A Comprehensive Guide", description: `
		Welcome to our in-depth exploration of one of the most intriguing aspects of blackjack – card counting. If you've ever wondered how some players seemingly have a sixth sense for predicting the next card, you're in the right place. In this blog, we'll unravel the mysteries of card counting, providing both beginners and experienced players with valuable insights and strategies to sharpen their skills.

		Section 1: The Basics of Card Counting
		
		1.1 Understanding the Deck:
		
		Breakdown of the standard deck composition.
		Importance of high and low-value cards in blackjack.
		1.2 The Fundamental Principle:
		
		Explanation of the basic premise behind card counting.
		How keeping track of the cards can influence your decisions at the table.
		Section 2: Getting Started with Card Counting
		
		2.1 Choosing a Counting System:
		
		Overview of popular counting systems (Hi-Lo, KO, Omega II, etc.).
		Pros and cons of each system.
		2.2 Practice Makes Perfect:
		
		Effective methods for honing your counting skills.
		Recommended drills and exercises to master card counting.
		Section 3: Advanced Techniques
		
		3.1 The True Count:
		
		Understanding and calculating the true count.
		How to adjust your bets based on the true count.
		3.2 Team Play:
		
		Exploring the concept of team-based card counting.
		Collaborative strategies for maximizing profits.
		Section 4: Staying Under the Radar
		
		4.1 Casino Countermeasures:
		
		Common techniques used by casinos to detect card counters.
		Tips for flying under the radar and avoiding detection.
		4.2 Bankroll Management:
		
		Strategies for managing your bankroll to withstand fluctuations.
		Balancing risk and reward in the world of card counting.
		Section 5: Real-Life Experiences and Success Stories
		
		5.1 Interviews with Professional Card Counters:
		
		Insights from experienced card counters on their journey.
		Lessons learned and advice for aspiring counters.
		Conclusion: Elevate Your Blackjack Game with Card Counting
		
		Whether you're a beginner intrigued by the concept or an experienced player looking to refine your skills, card counting can be a game-changer in the world of blackjack. Join us on this journey of discovery and empowerment as we delve into the art and science of card counting. Remember, the key to success lies not just in the cards you're dealt but in how you play them. Let's unlock the secrets together!
<br>
<br>
	`}]

	return (
		<div className="text-center">
			<Container>
				<Row>
					<Col
						lg={12}
						className="p-2 d-flex flex-wrap"
					>
						{
							sectionInfo.map((val, i) => {
								return (

									<Card className="border-1 shadow d-flex flex-column p-2 bg-light lead">
										{/* <Card.Img
												variant="top"
												src={val.imageURL}
											/> */}
										<Card.Body>
											<Card.Title className='display-3'>{val.heading}</Card.Title>
											<Card.Text>
												{parse(val.description)}
											</Card.Text>
										</Card.Body>
									</Card>
								)
							})
						}
					</Col>

				</Row>
			</Container>
		</div>
	)
}

export default About
