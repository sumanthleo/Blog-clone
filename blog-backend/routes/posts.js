import express from "express";

const router = express.Router();
import User from "../models/User.js";
import Post from "../models/Post.js";

//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log(error.message);
  }
});

//update Post the most imp

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (error) {
    console.log(error.message);
  }
});

// delete Post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const deletePost = await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (error) {
    console.log(error.message);
  }
});

//get Post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});



export default router;
