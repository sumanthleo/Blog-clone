import express from "express";
const router = express.Router();
import Catagories from "../models/Catagories.js";

router.post("/", async (req, res) => {
  const newCat = new Catagories(req.body);
  try {
    const savecat = await newCat.save();
    res.status(200).json(savecat);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Catagories.find();
    res.status(200).json(cats);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
