module.exports = app => {
	// Base URLS
	app.use('/', require('./base.routes.js'))
	app.use('/api/phones', require('./phones.routes.js'))
}
