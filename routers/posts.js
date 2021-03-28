const express = require('express');
const router = express.Router();

router.route('/').get((req,res)=>{
    res.end(new Date().toDateString());
}).post((req,res)=>{
    console.log(req.body.name);
    console.log(req.body);
    res.end(new Date().toDateString());
});
//
// router.get('/', (req,res)=>{
//     // console.log(req.query.limit);
//     // console.log(req.query);
//     res.end(new Date().toDateString());
// })
// router.post('/', (req,res)=>{
//     console.log(req.name);
//     res.end(new Date().toDateString());
// });
// router.put('/', (req,res)=>{
//     res.end(new Date().toDateString());
// });
// router.delete('/', (req,res)=>{
//     res.end(new Date().toDateString());
// })

// router.route('/:id').get((req, res) => {
//     console.log(req.params.id);
//     res.end("get " + req.params.id);
// }).put((req, res)=>{
//     res.end("edit " + req.params.id);
// }).delete((req, res)=>{
//     res.end("delete " + req.params.id);
// })

module.exports = router;