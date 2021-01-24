var express = require('express');
var router = express.Router();

/* GET trends localhost:8080/trends/trends  */
router.get('/trends', (req, res, next) => {
    res.status(200);
    res.send({
        body: "OK",
        trends: [
            {
                name: "Три полоски",
                description: "Песня из 2007 о полосках? просто девушка в парке Победы"
            }, {
                name: "Чувства",
                description: "Очень чувственная песня, из 2018"
            }, {
                name: "Дыши",
                description: "Ночь, фонарик, конечно аптека"
            }, {
                name: "Этажи",
                description: "Как порой сложно подниматься наверх"
            }
        ]
    });
});

module.exports = router;
