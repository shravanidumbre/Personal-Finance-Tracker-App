const express = require('express');
const router = express.Router();
const Goal = require('../models/goal.model');
const { checkUser } = require('../middleware/auth.middleware');

// Create goal
router.post('/create-goal', checkUser, async (req, res) => {
    try {
        const goalData = {
            ...req.body,
            createdAt: Date.now()
        };
        const goal = new Goal(goalData);
        await goal.save();
        res.status(201).json(goal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all goals for a user
router.post('/get-goals', checkUser, async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.body.userId });
        res.json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single goal
router.post('/get-goal/:id', checkUser, async (req, res) => {
    try {
        const goal = await Goal.findOne({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update goal
router.post('/update-goal/:id', checkUser, async (req, res) => {
    try {
        const goal = await Goal.findOneAndUpdate(
            { _id: req.params.id, userId: req.body.userId },
            req.body,
            { new: true }
        );
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json(goal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete goal
router.post('/delete-goal/:id', checkUser, async (req, res) => {
    try {
        const goal = await Goal.findOneAndDelete({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json({ message: 'Goal deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add collected amount to goal
router.post('/add-collected-amount/:id', checkUser, async (req, res) => {
    try {
        const goal = await Goal.findOne({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        
        goal.collectedAmounts.push({
            date_ms: Date.now(),
            amount: req.body.amount
        });
        
        await goal.save();
        res.json(goal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;