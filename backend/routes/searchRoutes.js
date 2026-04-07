const express = require("express");
const router = express.Router();
const inventory = require("../data/inventoryData");

router.get("/", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let results = [...inventory];

  // Validate price
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  // Name filter
  if (q) {
    results = results.filter((item) =>
      item.productName.toLowerCase().includes(q.toLowerCase()),
    );
  }

  // Category filter
  if (category) {
    results = results.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase(),
    );
  }

  // Min price
  if (minPrice) {
    results = results.filter((item) => item.price >= Number(minPrice));
  }

  // Max price
  if (maxPrice) {
    results = results.filter((item) => item.price <= Number(maxPrice));
  }

  res.json(results);
});

module.exports = router;
