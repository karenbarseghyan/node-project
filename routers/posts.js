const express = require('express');
const router = express.Router();

let date = new Date();
let hour = date.getHours();
router.get('/', (req,res)=>{
    res.end(`${hour} get`);
});
router.post('/', (req,res)=>{
    res.end(`${hour} post`);
});
router.put('/', (req,res)=>{
    res.end(`${hour} put`);
});
router.delete('/', (req,res)=>{
    res.end(`${hour} delete`);
})

module.exports = router;