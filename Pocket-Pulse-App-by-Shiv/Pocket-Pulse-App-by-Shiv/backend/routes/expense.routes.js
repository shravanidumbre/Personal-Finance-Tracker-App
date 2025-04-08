const express = require('express');
const router = express.Router();
const Expense = require('../models/expense.model');
const { checkUser } = require('../middleware/auth.middleware');

// Create expense
router.post('/create-expense', checkUser, async (req, res) => {
    try {
        const expenseData = {
            ...req.body,
            createdAt: Date.now()
        };
        const expense = new Expense(expenseData);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all expenses for a user
router.post('/get-expenses', checkUser, async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.body.userId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single expense
router.post('/get-expense/:id', checkUser, async (req, res) => {
    try {
        const expense = await Expense.findOne({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update expense
router.post('/update-expense/:id', checkUser, async (req, res) => {
    try {
        const expense = await Expense.findOneAndUpdate(
            { _id: req.params.id, userId: req.body.userId },
            req.body,
            { new: true }
        );
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.json(expense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete expense
router.post('/delete-expense/:id', checkUser, async (req, res) => {
    try {
        const expense = await Expense.findOneAndDelete({ 
            _id: req.params.id, 
            userId: req.body.userId 
        });
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;