const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// POST inventory
router.post("/", (req, res) => {
  const { supplier_id, product_name, quantity, price } = req.body;

  if (quantity < 0) {
    return res.status(400).json({ message: "Quantity must be >= 0" });
  }

  if (price <= 0) {
    return res.status(400).json({ message: "Price must be > 0" });
  }

  db.get(
    `SELECT * FROM suppliers WHERE id = ?`,
    [supplier_id],
    (err, supplier) => {
      if (!supplier) {
        return res.status(400).json({ message: "Invalid supplier_id" });
      }

      db.run(
        `INSERT INTO inventory (supplier_id, product_name, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [supplier_id, product_name, quantity, price],
        function (err) {
          if (err) return res.status(500).json(err);
          res.json({ id: this.lastID });
        },
      );
    },
  );
});

// GET inventory grouped
router.get("/grouped", (req, res) => {
  db.all(
    `
    SELECT s.name,
    SUM(i.quantity * i.price) AS total_value
    FROM suppliers s
    JOIN inventory i ON s.id = i.supplier_id
    GROUP BY s.id
    ORDER BY total_value DESC
    `,
    [],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

module.exports = router;
