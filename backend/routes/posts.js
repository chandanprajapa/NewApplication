const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from news routes");
});

router.get("/news", (req, res) => {
    res.send("Hello from news routes");
});

module.exports = router;