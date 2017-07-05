
const express = require('express');
const router = express.Router();


router.get('/keyboard', (req, res) => {
    const menu = {
        type: 'buttons',
        buttons: ["카인", "시", "메뉴3"]
    };

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(menu));
});

router.post('/message', (req, res) => {
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    let massage = {
        "message": {
            "text": '시간의문 20채널'
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
});

router.get('/', (req, res) => {
    console.log('aa')
});

module.exports = router;


