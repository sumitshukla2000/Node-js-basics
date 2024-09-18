const express = require('express');
const path = require('path'); // for managin paths
const router = express.Router();


router.get('/' , (req,res,next)=>{
    // res.send('<h1>Hello from Express JS</h1>');
    //for res.sendFile for sending file back to client

    res.sendFile(path.join(__dirname , '../' , 'views' , 'shop.html'));
});

module.exports = router;