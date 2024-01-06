var express = require("express");
var router = express.Router();

const searchController = require('../app/controllers/SearchController');


router.use('/', searchController.search)

module.exports = router;
