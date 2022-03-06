const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set("views", "views")
    // app.use('/', (req, res) => {
    //     res.send("Hello World")
    // })
app.use(bodyParser.urlencoded({ extended: false })); // x-www-form-urlencode
app.use(bodyParser.json()); // application/json
//connecting database
const connectDB = require('./database/connection')
connectDB();


app.use((req, res, next) => {
    console.log(req.url);
    next();
});

const userRouter = require('./routes/userRoutes')
const orderRouter = require('./routes/orderRoutes')
const productRouter = require('./routes/productRoutes')

app.use('/user', userRouter)
app.use('/order', orderRouter)
app.use('/products', productRouter)

app.get("/", (req, res) => {
    res.render("index");
});


app.get('*', (req, res, next) => {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.json({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(3000, () => console.log('server started'))