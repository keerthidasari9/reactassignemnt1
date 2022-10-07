var express = require('express');
var router = express.Router();

var userinfoModel = require('../model/userinfo');

router.post('/create', (req, res) => {
    let userinfo = new userinfoModel(req.body);
    userinfo.save((error, document) => {
        if(error) {
            return res.status(500).send({
                success: false,
                errorMsg: "Can not find server!!!"
            })

            return res.status(201).send({
                success: true,
                record: document
            })
        }
    })
});

module.exports = router;