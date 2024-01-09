import { Container, Row, Col, Card } from "react-bootstrap"
import classNames from "classnames";


const Home = () => {
	const sectionInfo = [
		{
			heading: "Welcome to '21 Insights' – Your Ultimate Blackjack Hub!",
			description: `Ready to up your blackjack game? "21 Insights" is your passport to becoming a master of the cards. Start exploring, start learning, and start winning – because when it comes to blackjack, knowledge is power!`
		},
		{

			heading: "🎲 Discover the Thrill of 21!",
			description: `Welcome to the ultimate destination for all things blackjack. Whether you're a seasoned pro or a curious novice, "21 Insights" is your go-to resource for mastering the art of this classic card game. Get ready to embark on a journey of strategy, skill, and, of course, the exhilarating rush of beating the dealer!`
		},
		{
			heading: "🃏 Unleash Your Inner Card Shark",
			description: `At "21 Insights," we believe that knowledge is the key to success at the blackjack table. Dive into our in-depth strategy guides, expert tips, and comprehensive tutorials designed to sharpen your skills and elevate your gameplay. From basic rules to advanced techniques, we've got you covered.`
		}
		,
		{
			heading: "📈 Stay Ahead with Strategy",
			description: `Explore the latest strategies and tactics that can turn the odds in your favor. Our team of experienced players and experts share their insights on optimal play, card counting techniques, and smart betting strategies. Stay one step ahead of the casino and maximize your chances of walking away a winner.`
		}
		,
		{
			heading: "🌆 💡 Beyond the Basics",
			description: `"21 Insights" goes beyond the basics, offering a deep dive into the world of blackjack. Learn about the history of the game, explore variations and unique twists, and stay informed about the latest trends in the world of casino gaming.`
		}
		,
		{
			heading: "🌐 Connect with the Community",
			description: `Join our vibrant community of blackjack enthusiasts! Share your experiences, discuss strategies, and connect with fellow players from around the globe. Whether you're a casual player or a dedicated pro, you'll find a welcoming community ready to share insights and stories.`
		},
		{
			heading: "🔥 Hot Topics and Trends",
			description: `Stay up-to-date with the hottest topics and trends in the world of blackjack. From new game variants to casino promotions, we keep you in the loop so you never miss out on the action.`
		}

	]

	return (
		<div>
			<div className="text-center">
				<Container>
					{
						sectionInfo.map((val, i) => {
							return (
								<Row className="" key={i}>
									<Col
										lg={12}
										className="p-2 d-flex flex-wrap"
									>
										<Card className={classNames("border-1", "shadow", "d-flex", "flex-column", "p-2", {
											"bg-info": (i % 2 == 0),
											"bg-warning": (i % 2 == 1),
										})}>
											{/* <Card.Img
												variant="top"
												src={val.imageURL}
											/> */}
											<Card.Body>
												<Card.Title>{val.heading}</Card.Title>
												<Card.Text>
													{val.description}
												</Card.Text>
											</Card.Body>
										</Card>

									</Col>

								</Row>
							)
						})
					}

				</Container>
			</div>
		</div>
	)
}

export default Home
