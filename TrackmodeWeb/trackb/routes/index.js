var express = require('express');
var router = express.Router();
var {Pis} = require('../models/Pis');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.get('/update', (req, res)=>{
  Pis.findAll()
  .then((pis)=>{
    console.log(JSON.stringify(pis));
    //relation
    //triangulation
    //return x y coordinate
  })
  .catch((err)=>console.log(err))
});

module.exports = router;
