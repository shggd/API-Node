const express = require('express');
const router = express.Router();
const Doge = require('../models/doge');
const Comment = require('../models/comment');
const User = require('../models/user');

router.param('dogeid',(req,res,next,dog)=>{
    Doge.findById(dog)
        .then(data=>{
            if(!data){
                res.status(404);
            }; 
                req.doge =data;
                return next();
        }).catch(next);
        
});


// return all 
router.get('/',(req,res)=>{
    Doge.find({}).exec()
        .then(AllDoge=>res.json(AllDoge))
        .catch(err=>res.json({success:false, msg:'Not Found'}));
});

//return a single
router.get('/:dogeid', (req,res)=>{
    Comment.find({"post._id":req.doge._id}).exec()
        .then(comment=>res.json({info:req.doge,comment:comment}))
        .catch(err=>res.json({error:err}));
});


module.exports = router;
