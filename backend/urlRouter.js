const express = require("express");
const { generateShortUrl } = require("./generateShortUrl");
const router = express.Router();

router.post("/", generateShortUrl);

module.exports = router;
