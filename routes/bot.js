
const express = require('express');
const router = express.Router();


router.get('/keyboard', (req, res) => {
    const menu = {
        type: 'buttons',
        buttons: ["메뉴1", "메뉴2", "메뉴3"]
    };

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(menu));
});

router.get('/', (req, res) => {
    console.log('aa')
});

module.exports = router;


