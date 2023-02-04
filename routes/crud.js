var express = require('express'),
 router = express.Router();
const daocreate = require('../dao/connection')

router.post('/create', async(req, res) => {

    let ress = await daocreate.createDoc();

    console.log("hello world api")
    res.send('Hello World!')
 });



 router.get('/findDoc', async(req, res) => {

    let ress = await daocreate.getData();

    console.log("hello world api",ress )
    res.status(200).send(ress)
 });

module.exports = router;

