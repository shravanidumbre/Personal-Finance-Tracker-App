const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
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
    incomeCategory: {
        type: String,
        enum: ['Salary', 'Investment', 'Other', 'Gift', 'Savings'],
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Income', incomeSchema);