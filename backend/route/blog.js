const express = require('express');
const router = express.Router();
const {time, name } = require ('../controllers/blog')

router.get('/',time)

router.get('/name', name)

router.get('/time',(req,res)=>{
    res.json({time: Date()})
})

module.exports =  router