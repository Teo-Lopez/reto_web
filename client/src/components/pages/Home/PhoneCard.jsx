import React from 'react'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const StyledCard = styled(Card)`
	height: 600px;
	margin: 12px;

	.card-title {
		text-align: center;
	}

	.imgWrapper {
		height: 400px;
	}

	.imgWrapper img {
		height: 100%;
		object-fit: contain;
		margin: 0 auto;
		display: block;
	}

	@media (max-width: 1500px) {
		height: 400px;
		.imgWrapper {
			height: 230px;
		}
	}

	@media (max-width: 768px) {
		img {
		}
	}
`

function PhoneCard({ name, screen, color, imageFileName, manufacturer }) {
	return (
		<StyledCard>
			<StyledCard.Body>
				<StyledCard.Title>
					{name} de {manufacturer}
				</StyledCard.Title>
				<div className='imgWrapper'>
					<StyledCard.Img src={process.env.REACT_APP_CLOUDINARY_URL + imageFileName}></StyledCard.Img>
				</div>
			</StyledCard.Body>
			<StyledCard.Footer>
				<p>Color: {color}</p>
				<p>Screen: {screen}</p>
			</StyledCard.Footer>
		</StyledCard>
	)
}

export default PhoneCard
