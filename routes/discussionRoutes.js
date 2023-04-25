const express = require("express");

const { getalldiscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getalldiscussion);

module.exports = router;