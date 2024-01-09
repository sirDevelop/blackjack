import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	const socials = [
		{
            // set up telegram Bot for this too
			icon: faEnvelope,
			url: "mailto: blackjack@gmail.com",
		},
		{
			icon: faFacebookSquare,
			url: "https://facebook.com/blackjackbank",
		}
	];

	return (
		<footer
			className="bg-body-tertiary mt-auto rounded-top-5 text-white py-3 "
			bg="dark"
			data-bs-theme="dark"
		>
			<Container>
				<Row>
					<Col lg={6}>
						<h3> BlackJack Knowledge Bank </h3>
						<p>
							Bring down the House | © Copyright All rights reserved
						</p>
					</Col>
					<Col lg={3}></Col>
					<Col lg={3}>
						<Row>
						{socials.map((social, i) => {
							return (
								<Col sm={3} key={i}>
									<a href={social.url} target="_blank" className="mx-3">
										<FontAwesomeIcon icon={social.icon} size="2x" />
									</a>
								</Col>
							)
						})
						}
						</Row>
                    </Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
