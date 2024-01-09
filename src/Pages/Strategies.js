// import { MongooseError } from 'mongoose'
import { useState } from 'react'
import { Tab, Row, Col, ListGroup, Table } from "react-bootstrap"
import CardCountingHiLo from "../Components/CardCountingHiLo"
// Hi-Lo System

// count = 0
// for(card in cards):
//     if(card is in [2,3,4,5,6])
//          count += 1
        // else if(card is in [10, J, Q, K, A])
        //     count -= 1

        // based on count =>
        // for example: count is in range(1,4) bet 2x normal bet
// https://meet.google.com/yvk-nchz-krd
// ok my laptop is going to run out of battery, lets take a 10 minute break. I need to drive home and ill work at home 
// i dont know why google meet is that short
// If you would like we can use discord I also add friended you and my discord name is alex
// I joined the google meet
        // 6 decks of cards - 52 cards each

// 7,8,9, pass

// if (card is in [10, J, Q, K, A])
// sum -= 1

// Sum is the count

// Based on sum - you change how much you bet
// If Sum is large - you should bet More

// Sum < 0, bet as little as you are allowed to bet $5, $10
// Sum = 0 , bet = $10
// Sum >= 3 bet = $25+


const Strategies = () => {
	const [tab, setTab] = useState("Basic_Strategy")
  return (
	  <Tab.Container activeKey={tab}>
		  <Row>
			  <Col sm={4}>
				  <ListGroup>
                      <ListGroup.Item className={`cursor-pointer ${tab === "Introduction" ? "active" : ""}`} onClick={() => setTab("Introduction")}>
                        Introduction
					  </ListGroup.Item>
					  <ListGroup.Item className={`cursor-pointer ${tab === "Basic_Strategy" ? "active" : ""}`} onClick={() => setTab("Basic_Strategy")}>
						  Basic Strategy
					  </ListGroup.Item>
					  <ListGroup.Item className={`cursor-pointer ${tab === "CC_HL" ? "active" : ""}`} onClick={() => setTab("CC_HL")}>
                        Card Counting: Hi-Lo System
					  </ListGroup.Item>
                      <ListGroup.Item className={`cursor-pointer ${tab === "CC_WH" ? "active" : ""}`} onClick={() => setTab("CC_WH")}>
                      Card Counting: Wong Halves System
					  </ListGroup.Item>
				  </ListGroup>
			  </Col>
			  <Col sm={8}>
				  <Tab.Content>
                    <Tab.Pane eventKey="Introduction">Introduction</Tab.Pane>
					  <Tab.Pane eventKey="Basic_Strategy">
                        <Table>
                            
                        </Table>

                      </Tab.Pane>
					  <Tab.Pane eventKey="CC_HL">
						  <CardCountingHiLo />
					  </Tab.Pane>
                      <Tab.Pane eventKey="CC_WH">Card Counting: Wong Halves System</Tab.Pane>
				  </Tab.Content>
			  </Col>
		  </Row>
	  </Tab.Container>
  )
}

export default Strategies