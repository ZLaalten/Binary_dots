const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    device_id : {
        type : String,
        required : true
    },
    beacon_id : {
        type : String, 
        required : true
    },
    signal_strength : {
        type : String, 
        required : false
    },
    timestamp : {
        type : String, 
        required : false
    }


});

const Data = module.exports = mongoose.model('Data', DataSchema);