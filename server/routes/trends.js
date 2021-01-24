var express = require('express');
var router = express.Router();

/* GET trends localhost:8080/trends/trends  */
router.get('/trends', (req, res, next) => {
    res.send([
        {
            name: "name1",
            description: "descr"
        }, {
            name: "name2",
            description: "descr 2"
        }
    ]);
});

module.exports = router;
