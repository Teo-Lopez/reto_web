import React, { useState, useEffect } from 'react'
import PhoneList from './PhoneList'
import styled from 'styled-components'
import CustomSpinner from '../../shared/CustomSpinner'
import PhoneService from '../../services/phones.service'

const phoneService = new PhoneService()
const HomeWrapper = styled.section`
	margin: 24px;
	height: 100vh;

	a {
		color: initial;
	}

	a:hover .h5 {
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}
`

function Home() {
	const [list, setList] = useState(null)

	useEffect(() => {
		phoneService
			.getAll()
			.then(res => setList(res.data.phones))
			.catch(err => console.log(err))
	}, [])

	return <HomeWrapper>{Array.isArray(list) ? <PhoneList phones={list} /> : <CustomSpinner />}</HomeWrapper>
}
export default Home
