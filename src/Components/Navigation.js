import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCartArrowDown,
	faSignInAlt,
	faSpinner,
	faUserAlt,
	faRightFromBracket,
	faHistory,
} from "@fortawesome/free-solid-svg-icons"
import { Link, Navigate, useLocation } from "react-router-dom"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Badge } from "react-bootstrap"

const Navigation = () => {
	const pathname = useLocation().pathname
	return (
		<Navbar expand={'sm'} className="bg-body-tertiary border-bottom border-secondary">
			<Container fluid>
				<Navbar.Brand href="#">Blackjack Blog</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-sm`}
					aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-center flex-grow-1 pe-3">
							<Nav.Link as={Link} className={`${pathname === "/" ? "bg-primary text-white":""} rounded-pill`} to="/">Home</Nav.Link>
							<Nav.Link as={Link} className={`${pathname.indexOf("strategies") !== -1 ? "bg-primary text-white" : ""} rounded-pill`} to="/strategies">Strategies</Nav.Link>
							<Nav.Link as={Link} className={`${pathname.indexOf("about") !== -1 ? "bg-primary text-white" : ""} rounded-pill`} to="/about">About</Nav.Link>
							{/* <NavDropdown
								title="Dropdown"
								id={`offcanvasNavbarDropdown-expand-sm`}
							>
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
						{/* <Form className="d-flex">
				<Form.Control
				type="search"
				placeholder="Search"
				className="me-2"
				aria-label="Search"
				/>
				<Button variant="outline-success">Search</Button>
			</Form> */}
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	)
}

export default Navigation