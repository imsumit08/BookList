//importing express router
const Router = require('express').Router();

Router.get('', function(req, res){
    res.json({
        status: "working",
        message: "Route is Working"
    })
})

module.exports = Router;