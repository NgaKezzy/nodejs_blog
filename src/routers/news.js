var express = require("express");
var router = express.Router();

const newController = require('../app/controllers/NewsController');


router.use('/', newController.index)

module.exports = router;
