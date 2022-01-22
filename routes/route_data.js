const express = require('express');
const extend = require('extend');
const router = express.Router();

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