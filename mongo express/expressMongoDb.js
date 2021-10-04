var mongoose = require('mongoose')
var Customer = require('./customer')
// burada mongodb de olusturdugumuz semayi import ediyorum
// Prints "MongoServerError: bad auth Authentication failed."

mongoose.connect('mongodb+srv://shop:1@cluster0.9ximg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (error) => {
    if (!error) {
        console.log('connected to mongo db')
    }
});

var customer1 = new Customer({
    name: "Hindistanli seyma",
    city:"Bursa"
})

customer1.save((error) => {
    if (error) {
        throw error;
    }
    console.log("customer saved")
})

/*
Customer.find({}, (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
})
*/
/*
Customer.findById('6154d305f9e0159877381787', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
})
Customer.find({name:'Zeliha Erim'}, (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
})
*/
/*
Customer.find({}, (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
}).where('city').equals('Ankara').limit(2);
// where('city').equals('Ankara');
// where('age').gt(12).lt(15).limit(2);
// where('age').gte(12).lte(15).limit(2);
// where('city').equals('Ankara').limit(2).sort('city').select('city');
// where('city').equals('Ankara').limit(2).select('city');
// where('city').equals('Ankara').limit(2).select('city name');

Customer.findById('6154d305f9e0159877381787', (error, data) => {
    if (error) {
        throw error;
    }
    data.city = 'Kayseri'
    data.save((error) => {
        if (error) {
            throw error;
        }
        console.log("data updated")
    })
});

Customer.findById('6154d305f9e0159877381787', (error, data) => {
    if (error) {
        throw error;
    }
    data.remove((error) => {
        if (error) {
            throw error;
        }
        console.log("data deleted")
    })
});

Customer.findOneAndUpdate({ name: 'Zeliha2 Erim' }, { name: 'Zeliha Erim' }, (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
});
let id ='6154d305f9e0159877381787'
Customer.findByIdAndUpdate(id,{ name: 'Zeliha3 Erim' }, (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data)
});
*/



