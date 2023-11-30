const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta', 'Spirit']
    },
    airport: {
        type: String,
        enum: ['LAX', 'DEN', 'SAN', 'JFK', 'SFO'],
        default: 'LAX'
    },
    flightNo: { type: Number, min: 10, max: 9999 },
    departs: { type: Date }//Default one year from date created
})

module.exports = mongoose.model('Flight', flightSchema)