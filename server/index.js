// require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();


//Server set up as App/express
const app = express();
app.use(bodyParser.json())

//set up massive
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
});

//ENDPOINTS




//server listener
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is sailing from port: ${PORT} ⛵️`);
})