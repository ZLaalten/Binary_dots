const express = require('express');
const extend = require('extend');
const router = express.Router();
const async = require('async');

const Data = require('../models/data');

// getting datas
router.get('/get_all', (req, res, next)=>{
    Data.find((err, datas)=>{
        res.json(datas);
    })
});

//adding datas
router.post('/',(req, res, next)=>{
    let newData = new Data(req.body);
    newData.save((err, data)=>{
        if(err){
            //console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/post_all', (req, res, next) => {
    let datas = req.body;
    async.each(datas, function (data, callback) {
        let newData = new Data(data);
        newData.save((err, data)=>{
            if(err){
                return callback(error);
            }
            else{
                return callback();
            }
        })
    }, function(err){
        if (err) {
            res.status(403).json({ msg: 'Error in updating data', data: req.body, status: err });
        }
        else {
            res.json({ msg: 'Successfully posted', data: req.body, status: 'success' });
        }
    });
});

//deleting datas
router.delete('/',(req, res, next)=>{
    var _id = req.param("id");
    //console.log(_id);
    Data.remove({_id : _id}, (err, result)=>{
        if(err){
            res.json("Error : " + err);
        }
        else{
            res.json("Succesfully deleted");
        }
    } );
})

router.delete('/delete_all', (req, res, next)=>{
    Data.remove({}, (err, result)=>{
        if(err){
            res.json("Error : " + err);
        }
        else{
            res.json("Succesfully deleted");
        }
    } );
})

module.exports = router;