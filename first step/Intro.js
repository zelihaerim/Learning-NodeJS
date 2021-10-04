// JavaScript source code
var http = require('http')
var log=require('./log.js')
var sayFunc = require('./exportsDemo.js')
http.createServer(function (request, response) {
    if (request.url == "/admin") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<html><body><strong> Admin sayfasý </strong></body></html>');
    }
    else if (request.url == "/"){
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<html><body><strong> Anasayfa </strong></body></html>');
    }
    else if (request.url == "/customer") {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({name:'Zeliha',lastname:'Erim'}))
    }

    // response.writeHead(200, {'Content-Type':'text/html'})
    response.end(' ')

}).listen(8080)

log.information('sunucu yayina gecti')

sayFunc()



