
const express = require('express');
const router = express.Router();
const bot = require('../service/chooseChannel');

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
    console.log("=======================================================");
    console.log(req.body.content);
    console.log("=======================================================");
    console.log(res);
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    let massage = {};
    let selectedChannel = "";


    if(req.body.type == "text") {
        if (!server) {
            server = req.body.content;
            massage.message.text = "아이템을 입력해주세요";
            massage.keyboard = {"type": "text"};
        } else {
            selectedChannel = bot.choseChannel(server);
            massage.massage.text = req.body.content + "의 추천채널은 " + selectedChannel +"입니다. \n뜬다면 메가폰 한번 날려줘요! ^^";
            massage.keyboard = {
                "type": "buttons",
                "buttons": serverList
            };
            massage.massage.photo = {
                "url": "http://hell.cafe24app.com/images/beam.png",
                "width": 640,
                "height": 480
            };
            server = undefined;
        }
    } else {
        massage.massage = "잘못된 타입의 데이터입니다."
    }
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


module.exports = router;


