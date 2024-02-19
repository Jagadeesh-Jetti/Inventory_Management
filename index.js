const express = require("express");
const cors = require("cors");

const database = require("./db");
const InventoryRouter = require("./routers/Inventory.router");
const SaleRouter = require("./routers/Sale.router");

const app = express();

database();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/inventories", InventoryRouter);
app.use("/sales", SaleRouter);

app.get("/", (req, res) => {
  res.send("Inventory Management Backend");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Inventory Management Backend server started");
});
