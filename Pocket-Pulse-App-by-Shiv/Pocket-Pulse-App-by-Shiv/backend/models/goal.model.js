const mongoose = require('mongoose');

const goalCategories = [
    'Important', 'Personal', 'Emergency Fund', 'Other', 
    'Travel', 'Health', 'Education', 'Retirement', 
    'Home', 'Family', 'Charity', 'Business'
];

const collectedAmountSchema = new mongoose.Schema({
    date_ms: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const goalSchema = new mongoose.Schema({
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
    goalCategory: {
        type: String,
        enum: goalCategories,
        required: true
    },
    image: {
        type: String
    },
    collectedAmounts: [collectedAmountSchema]
});

module.exports = mongoose.model('Goal', goalSchema);