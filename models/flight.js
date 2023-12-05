const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String
    },
    arrival: Date,
}, {
    timestamp: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta', 'Spirit']
    },
    airport: {
        type: String,
        enum: ['LAX', 'DEN', 'SAN', 'JFK', 'SFO']
    },
    flightNo: { type: Number, min: 10, max: 9999, required: true },
    departs: Date, //Default one year from date created
    destination: [destinationSchema]
    }, {
    timestamp: true    
})


module.exports = mongoose.model('Flight', flightSchema)