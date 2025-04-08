const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const incomeRoutes = require('./routes/income.routes');
const expenseRoutes = require('./routes/expense.routes');
const goalRoutes = require('./routes/goal.routes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/finance_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Routes
app.use('/api/income', incomeRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/goal', goalRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});