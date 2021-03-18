import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import PhonesService from '../../services/phones.service'

const phonesService = new PhonesService()

const PhoneWrapper = styled.section`
	margin: 120px 60px 0 60px;

	img {
		object-fit: contain;
	}
	.description {
		padding: 54px 0 54px 54px;
		display: block;
		margin: 0 auto;
	}

	& > div {
		align-items: center;
	}

	@media (max-width: 768px) {
		text-align: center;
		img {
			width: 450;
		}
		li {
			list-style: none;
		}
	}
`

function PhoneDetails() {
	const { id } = useParams()
	const [phone, setPhone] = useState({})

	useEffect(() => {
		phonesService
			.getOne(id)
			.then(res => setPhone(res.data.phone))
			.catch(err => console.log(err))

		return () => {}
	}, [id])

	return (
		<PhoneWrapper>
			<Row>
				<Col className='description' lg={{ size: 6, order: 1 }} xs={{ size: 12, order: 2 }}>
					<header>
						<h2>{phone.name}</h2>
						<p>{phone.manufacturer}</p>
					</header>
					<article>
						<p>{phone.description}</p>
						<p>Chararacteristics:</p>
						<ul>
							<li>Color: {phone.color}</li>
							<li>Screen type: {phone.screen}</li>
							<li>Processor: {phone.processor}</li>
							<li>Ram memory:{phone.ram}</li>
							<li>Price: {phone.price}€</li>
						</ul>
					</article>
				</Col>
				<Col lg={{ size: 3, order: 2 }} xs={{ size: 12, order: 1 }}>
					<img src={`${process.env.REACT_APP_CLOUDINARY_URL + phone.imageFileName}`} alt={phone.name}></img>
				</Col>
			</Row>
		</PhoneWrapper>
	)
}

export default PhoneDetails
