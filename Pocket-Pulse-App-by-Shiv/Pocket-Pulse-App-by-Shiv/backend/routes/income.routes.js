const express = require('express');
const router = express.Router();
const Income = require('../models/income.model');
const { checkUser } = require('../middleware/auth.middleware');

// Create income
router.post('/create-income', checkUser, async (req, res) => {
    try {
        const incomeData = {
            ...req.body,
            createdAt: Date.now()
        };
        const income = new Income(incomeData);
        await income.save();
        res.status(201).json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all incomes for a user
router.post('/get-incomes', checkUser, async (req, res) => {
    try {
        const incomes = await Income.find({ userId: req.body.userId });
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single income
router.post('/get-income/:id', checkUser, async (req, res) => {
    try {
        const income = await Income.findOne({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update income
router.post('/update-income/:id', checkUser, async (req, res) => {
    try {
        const income = await Income.findOneAndUpdate(
            { _id: req.params.id, userId: req.body.userId },
            req.body,
            { new: true }
        );
        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete income
router.post('/delete-income/:id', checkUser, async (req, res) => {
    try {
        const income = await Income.findOneAndDelete({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.json({ message: 'Income deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;