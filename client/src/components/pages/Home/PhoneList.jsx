import React from 'react'
import { Link, generatePath } from 'react-router-dom'
import CardDeck from 'react-bootstrap/CardDeck'
import { Row, Col } from 'react-bootstrap'
import PhoneCard from './PhoneCard'

function PhoneList({ phones }) {
	return (
		<CardDeck>
			<Row>
				{phones.map((phone, idx )=> (
					<Col lg={3} md={6} sm={12} key={idx}>
						<Link to={generatePath('/details/:id', { id: phone.id })} >
							<PhoneCard {...phone} />
						</Link>
					</Col>
				))}
			</Row>
		</CardDeck>
	)
}

export default PhoneList
