const express = require('express')
const router = express.Router()
const phones = require('../bin/phones.json')

router.get('/', (_, res) =>
	setTimeout(() => {
		res.json({ phones })
	}, 2000)
)

router.get('/:id', (req, res) => {
	const phone = phones.find(elm => elm.id == req.params.id)
	res.json({ phone })
})

module.exports = router
