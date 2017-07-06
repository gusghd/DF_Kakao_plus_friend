
const express = require('express');
const router = express.Router();

const serverList = ["카인", "시로코", "카시야스", "안톤", "디레지에", "프레이", "힐더", "바칼"];

let server;

router.get('/keyboard', (req, res) => {
    const menu = {
        type: 'buttons',
        buttons: serverList
    };

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(menu));
});


router.post('/message', (req, res) => {
    console.log(req.body.url);
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    let textContent = req.body.content;
    let keyboard;
    if(!server) {
        server = req.body.content;
        textContent = "아이템을 입력해주세요";
        keyboard =  {"type": "text"};
    } else {
        textContent = req.body.content + "의 추천채널은" + +" \n나오면 뽀찌주세요 ^^"
        keyboard = {
            "type": "buttons",
            "buttons": serverList
        }
    }
    let massage = {
        "message": {
            "text": textContent
        },
        "keyboard": keyboard
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(massage));
    res.redirect('/message');
});

/*router.post('/friend', checkUserKey, (req, res) => {
    const user_key = req.body.user_key;
    console.log(`${user_key}님이 쳇팅방에 참가했습니다.`);

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify({success: true}));
});*/

router.get('/', (req, res) => {
    console.log('aa')
});

module.exports = router;


