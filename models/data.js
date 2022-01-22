const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    device_id : {
        type : String,
        required : true
    },
    tag_id : {
        type : String, 
        required : true
    },
    timestamp : {
        type : String, 
        required : false
    }


});

const Data = module.exports = mongoose.model('Data', DataSchema);