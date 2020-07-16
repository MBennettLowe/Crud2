const express = require('express')
const bodyParser= require('body-parser') // help to tidy up the request object before we use them.
const app = express()

// Make sure you place body-parser before your CRUD handlers!
// The urlencoded method within body-parser tells body-parser to extract data 
// from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({ extended: true}))

// All of your handlers here....

// serving up index.html in the root project directory
app.get('/', (req, res)  => {
    res.sendFile(__dirname + '/index.html')
});

// This POST request can be triggered through JavaScript or through a <form> element.
app.post('/quotes', (req, res) => {
    console.log('Helllllooooooo')
}); 

app.listen(3000, function() {
    console.log('Listening on Port 3000')
});