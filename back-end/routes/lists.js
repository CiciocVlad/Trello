const express = require("express");
const router = express.Router();
const List = require("../models/List");

// Get request method (read) -> Read All Cards from a List.
// router.get("/:title", async (req, res) => {
//     try {
//         let foundList = await List.find({ title: req.params.title }).populate("cards");
//         res.json(foundList);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// Get request method (read)
router.get("/", async (req, res) => {
    try {
        const lists = await List.find();
        res.json(lists);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get request method by id (read by id)
router.get("/:listId", async (req, res) => {
    try {
        const list = await List.findById(req.params.listId).populate('cards');
        res.json(list);
    } catch (err) {
        res.json({ message: err });
    }
});
//fieldul de cards din frontend in useeffect cand afisez listele afisez si cardurile ca am ids si cardurile

// Post request method (create)
router.post("/", async (req, res) => {
    const list = new List({
        title: req.body.title,
    });

    try {
        const savedList = await list.save();
        res.json(savedList);
    } catch (err) {
        res.json({ message: err });
    }
});

// Put request method (update)
router.put("/:listId", async (req, res) => {
    try {
        const updatedList = await List.updateOne(
            { _id: req.params.listId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedList);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete request method (delete)
router.delete("/:listId", async (req, res) => {
    try {
        const removedList = await List.deleteOne({ _id: req.params.listId });
        res.json(removedList);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete request method (delete all)
router.delete("/", async (req, res) => {
    try {
        const removedAllList = await List.deleteMany();
        res.json(removedAllList);
    } catch (err) {
        res.json({ message: err });
    }
});

// Validation

module.exports = router;
