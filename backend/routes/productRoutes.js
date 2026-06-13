const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("GET /products error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post("/save/product", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product Saved" });
  } catch (error) {
    console.error("POST /save/product error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

router.put("/product/:id", async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Product Updated" });
  } catch (error) {
    console.error("PUT /product/:id error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/product/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted" });
  } catch (error) {
    console.error("DELETE /product/:id error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;