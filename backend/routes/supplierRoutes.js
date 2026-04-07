const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", (req, res) => {
  const { name, city } = req.body;

  db.run(
    `INSERT INTO suppliers (name, city) VALUES (?, ?)`,
    [name, city],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID, name, city });
    },
  );
});

module.exports = router;
