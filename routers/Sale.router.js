const express = require("express");

const SaleRouter = express.Router();
const Sale = require("../models/Sale.model");

SaleRouter.get("/", async (req, res) => {
  try {
    const allSales = await Sale.find();
    res.status(200).json(allSales);
  } catch (error) {
    res.status(500).json({ error: "Error while fetching the sales" });
  }
});

SaleRouter.post("/", async (req, res) => {
  const { name, quantity, price, category } = req.body;
  try {
    if (name && quantity && price && category) {
      const saleAdded = new Sale({ name, quantity, price, category });
      await saleAdded.save();
      res
        .status(201)
        .json({ message: "Sale added to DB successfully", data: saleAdded });
    } else {
      res.status(400).json({ error: "Missing required fields" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while adding the sale" });
  }
});

SaleRouter.put("/:id", async (req, res) => {
  const updatedData = req.body;
  const saleId = req.params.id;

  try {
    const saleUpdated = await Sale.findByIdAndUpdate(saleId, updatedData, {
      new: true,
    });

    if (!saleUpdated) {
      res.status(404).json({ error: "Could not find the sale to update" });
    } else {
      res.status(201).json({ message: "Sale updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while updating the sale" });
  }
});

SaleRouter.delete("/:id", async (req, res) => {
  const saleId = req.params.id;
  try {
    const saleDeleted = await Sale.findByIdAndDelete(saleId);

    if (!saleDeleted) {
      res.status(404).json({ error: "Could not find the sale to delete" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deleting the sale" });
  }
});

module.exports = SaleRouter;
