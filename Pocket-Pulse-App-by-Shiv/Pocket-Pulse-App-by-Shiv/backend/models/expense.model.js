const mongoose = require('mongoose');

const expenseCategories = [
    'Food', 'Transport', 'Entertainment', 'Utilities', 
    'Luxury Expense', 'Other', 'Healthcare', 'Clothing', 
    'Education', 'Housing', 'Travel', 'Dining Out', 
    'Groceries', 'Bills', 'Subscriptions', 'Miscellaneous'
];

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date_ms: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now
    },
    expenseCategory: {
        type: String,
        enum: expenseCategories,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Expense', expenseSchema);