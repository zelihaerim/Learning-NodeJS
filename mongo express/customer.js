var mongoose = require('mongoose')
var Schema = mongoose.Schema;
// mongo db den schema olustur ve kendine gore sekillendir o semayý ve export et
var customerSchema = new Schema({
    name: String,
    city: String
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer



