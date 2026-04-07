const express = require("express");
const cors = require("cors");

const searchRoutes = require("./routes/searchRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/search", searchRoutes);
app.use("/supplier", supplierRoutes);
app.use("/inventory", inventoryRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
