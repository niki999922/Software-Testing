let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

let users = [];
let currentUser = null;

router.post("/register", bodyParser.json(), (req, res) => {
    const data = req.body;
    console.log(data);

    if (users.some(user => user.login === data.login)) {
        res.send({
            body: 'This user does not exits'
        });
        return;
    }
    console.log("11");

    users.push({
        login: data.login,
        password: data.password
    });
    console.log("22");
    console.log(users.length)
    res.send({body: 'OK'});
});

router.post("/login", bodyParser.json(), (req, res) => {
    const data = req.body;
    console.log(data);

    if (users.some(user => user.login === data.login && user.password === data.password)) {
        currentUser = data;
        res.send({body: 'OK'});
    } else {
        res.send({body: 'Incorrect login, try again'});
    }
});

router.get("/logout", (req, res) => {
    currentUser = null;
    res.send({body: 'OK'});
});

module.exports = router;
