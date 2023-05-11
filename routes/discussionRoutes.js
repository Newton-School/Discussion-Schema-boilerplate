const express = require("express");

const { getAllDiscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getAllDiscussion);

module.exports = router;