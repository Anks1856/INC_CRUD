const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT || 3000 ;

//db connection
const db = require('./models');

app.use(express.json());


// route registration
const router = require('./Routes');
app.use('/api', router);

app.get('/' , (req, res)=> {
    res.status(200).send("welcome to my app.");
})

app.listen(port , (err) => {
    console.log(`server is running on port ${port} ....`)
})
