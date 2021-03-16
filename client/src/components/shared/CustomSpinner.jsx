import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'

const SpinnerWrapper = styled.div`
	display: flex;
	align-items: center;
  height: 100%;
	.spinner {
		display: block;
		margin: 0 auto;
	}
`

function CustomSpinner() {
	return (
		<SpinnerWrapper>
			<Spinner className='spinner' animation='border' variant='info'>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</SpinnerWrapper>
	)
}

export default CustomSpinner
