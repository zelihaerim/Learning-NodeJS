// const { response } = require('express')
var express = require('express')
var app = express()
// npm install body-parser
var bodyParser = require('body-parser')
var urlEncodedParser = bodyParser.urlencoded(extended: false)
// postman'de url encoded seçtim bunu burada belirtmeliyim.
app.get('/', function (request, response) {
    response.send('Merhaba')
})

app.get('/admin', function (request, response) {
    response.send('Admin')
})
/*
app.get('/product', function (request, response) {
    response.send('Product')
})
*/

app.get('/product', function (request, response) {
    // http://localhost:8080/product?id=1&category=2
    // gibi bir requestte query parametrelerini almak icin:
    console.log("ID : "+request.query.id)
    console.log("Category : " +request.query.category)
    response.send('Merhaba Product')
})





// /*customer* -> includes customer
// /*customer  -> starts with customer
app.get('/customer*', function (request, response) {
    response.send('Customer listelendi')
})

app.post('/product', function (request, response) {
    response.send('Post istegi alindi')
})
// read post data
app.post('/productpost', urlEncodedParser, function (request, response) {
    console.log(request.body)
    console.log(request.body.isim)

    response.send('product body Post istegi alindi')
})



app.delete('/product', function (request, response) {
    response.send('Delete istegi alindi')
})

var server = app.listen(8080);


// dev dependencies'e 
// npm install jasmine --save - dev
// ile atarýz ki uygulamayý release yaparken boþuna þiþirilmesin
// ozellikle bir version yuklemek icin : 
// npm install bootstrap@3.3.7
// npm update hepsini guncelliyor
// npm install -g nodemon



