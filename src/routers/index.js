
const newRouter = require('./news')
const homeRouter = require('./home')
const searchRouter = require('./search')



function route(app) {

    app.use('/news', newRouter)

    app.use('/home', homeRouter)

    app.use('/search', searchRouter)

}

module.exports = route;