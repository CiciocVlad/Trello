const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Get request method (read)
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get request method by id (read by id)
router.get('/:cardId', async (req, res) => {
    try {
        const card = await Card.findById(req.params.cardId);
        res.json(card);
    } catch (err) {
        res.json({ message: err });
    }
});

// Post request method (create)
router.post('/', async (req, res) => {
    const card = new Card({
        title: req.body.title
        // list: req.body.list,
    });

    try {
        const savedCard = await card.save();
        res.json(savedCard);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Put request method (update)
router.put('/:cardId', async (req, res) => {
    try {
        const updatedCard = await Card.updateOne(
            { _id: req.params.cardId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedCard);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete request method (delete)
router.delete('/:cardId', async (req, res) => {
    try {
        const removedCard = await Card.deleteOne({ _id: req.params.cardId });
        res.json(removedCard);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete request method (delete all)
router.delete('/', async (req, res) => {
    try {
        const removedAllCard = await Card.deleteMany();
        res.json(removedAllCard);
    } catch (err) {
        res.json({ message: err });
    }
});

// Validation


module.exports = router;