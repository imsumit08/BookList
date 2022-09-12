let mongoose = require('mongoose');

//setUp Schema

let BookSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    genre: String,
    add_date: {
        type: Date,
        default: Date.now
    }
});

//mongoose.model('<collectionName>', 'CollectionSchema')
var Book = module.exports = mongoose.model('book', BookSchema);

module.exports.get = function(callback, limit){
    Book.find(callback).limit(limit);
} 