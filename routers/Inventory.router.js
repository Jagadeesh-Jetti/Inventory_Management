const express = require("express");

const InventoryRouter = express.Router();
const { Inventory } = require("../models/Inventory.model");

InventoryRouter.get("/", async (req, res) => {
  try {
    const allInventories = await Inventory.find();
    res.status(200).json(allInventories);
  } catch (error) {
    res.status(500).json({ error: "Error while fetching all the inventories" });
  }
});

InventoryRouter.post("/", async (req, res) => {
  const { name, quantity, price, category } = req.body;
  try {
    const inventoryAdded = new Inventory({ name, quantity, price, category });
    await inventoryAdded.save();
    res.status(201).json({ message: "Inventory added succesfully" });
  } catch (error) {
    res.status(500).json({ error: "Error while adding the inventory" });
  }
});

InventoryRouter.put("/:id", async (req, res) => {
  const updatedData = req.body;
  const inventoryId = req.params.id;

  try {
    const inventoryUpdated = await Inventory.findByIdAndUpdate(
      inventoryId,
      updatedData,
      { new: true }
    );

    if (!inventoryUpdated) {
      res.status(404).json({ error: "Couldnt find the inventory to update" });
    } else {
      res.status(201).json({ message: "Inventory updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while updating the inventory" });
  }
});

InventoryRouter.delete("/:id", async (req, res) => {
  const inventoryId = req.params.id;
  try {
    const inventoryDeleted = await Inventory.findByIdAndDelete(inventoryId);

    if (!inventoryDeleted) {
      res.status(404).json({ error: "Couldnt find the inventory to delete" });
    } else {
      res.status(500).json({ message: "Deleted the inventory successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deleting the inventory" });
  }
});

module.exports = InventoryRouter;
