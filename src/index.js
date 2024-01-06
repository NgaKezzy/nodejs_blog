const express = require('express')
const path = require('path')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000
const morgan = require('morgan')
const route = require('./routers/index');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json())

// http logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app)




app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})