
const express = require('express');
const router = express.Router();


router.get('/keyboard', (req, res) => {
    const menu = {
        type: 'buttons',
        buttons: ["카인", "시", "메뉴3", "카인", "시", "메뉴3", "카인", "시", "메뉴3"]
    };

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(menu));
});


router.post('/message', (req, res) => {
    console.log("req");
    console.log(req);
    console.log("res");
    console.log(res);
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    let massage = {
        "message": {
            "text": req.body.content
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "메뉴1",
                "메뉴2",
                "메뉴3"
            ]
        }
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(massage));
    res.redirect('/message');
});

router.get('/', (req, res) => {
    console.log('aa')
});

module.exports = router;


