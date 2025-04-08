type ExpenseCategory = "Food" | "Transport" | "Entertainment" | "Utilities" | "Luxury Expense" | "Other" | "Healthcare" | "Clothing" | "Education" | "Housing" | "Travel" | "Dining Out" | "Groceries" | "Bills" | "Subscriptions" | "Miscellaneous";

const expenses = [
    {
        id: 1,
        title: "Grocery",
        description: "Groceries for the month",
        amount: 200,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Food",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    },
    {
        id: 2,
        title: "Gas",
        description: "Gas for the month",
        amount: 100,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Transport",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    },
    {
        id: 3,
        title: "Movie",
        description: "Movie night with friends",
        amount: 50,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Entertainment",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    },
    {
        id: 4,
        title: "Bus Ticket",
        description: "Monthly bus ticket",
        amount: 75,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Transport",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    },
    {
        id: 5,
        title: "Electricity Bill",
        description: "Monthly electricity bill",
        amount: 120,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Utilities",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    },
    {
        id: 6,
        title: "Dining Out",
        description: "Dinner at a restaurant",
        amount: 80,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Food",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    },
    {
        id: 7,
        title: "Concert",
        description: "Concert tickets",
        amount: 150,
        date_ms: 1672531199000,
        category: "Expense",
        expenseCategory: "Entertainment",
        userId: 1,
        createdAt: 1672531199000,
        image: "https://media.istockphoto.com/id/524892918/vector/smashed-piggy-bank.jpg?s=612x612&w=0&k=20&c=3DK94k8BdZxE8e1hkFUUyGfhrHWkF2_PDsSbZ3qsckE=",
    }
]

type IncomeCategory = "Salary" | "Investment" | "Gift" | "Savings" | "Other";

const incomes = [
    {
        id: 1,
        title: "Salary",
        description: "Monthly salary",
        amount: 3000,
        date_ms: 1672531199000,
        category: "Income",
        userId: 1,
        createdAt: 1672531199000,
        incomeCategory: "Salary",
        image: "https://example.com/income1.jpg",
    },
    {
        id: 2,
        title: "Investment",
        description: "Monthly investment",
        amount: 500,
        date_ms: 1672531199000,
        category: "Income",
        userId: 1,
        createdAt: 1672531199000,
        incomeCategory: "Investment",
        image: "https://example.com/income2.jpg",
    },
    {
        id: 3,
        title: "Gift",
        description: "Gift from a friend",
        amount: 100,
        date_ms: 1672531199000,
        category: "Income",
        userId: 1,
        createdAt: 1672531199000,
        incomeCategory: "Other",
        image: "https://example.com/income3.jpg",
    },
    {
        id: 4,
        title: "Savings",
        description: "Monthly savings",
        amount: 200,
        date_ms: 1672531199000,
        category: "Income",
        userId: 1,
        createdAt: 1672531199000,
        incomeCategory: "Other",
        image: "https://example.com/income4.jpg",
    },
]

type GoalCategory = "Important" | "Personal" | "Emergency Fund" | "Other" | "Travel" | "Health" | "Education" | "Retirement" | "Home" | "Family" | "Charity" | "Business";

const goals = [
    {
        id: 1,
        title: "Vacation",
        description: "Vacation trip",
        amount: 15000,
        date_ms: 1672531199000,
        category: "Goal",
        userId: 1,
        createdAt: 1672531199000,
        goalCategory: "Important",
        image: "https://cdn-icons-png.flaticon.com/512/5324/5324945.png",
        collectedAmounts: [
            {
                date_ms: 1672531199000,
                amount: 5000,
            },
            {
                date_ms: 1672531199000,
                amount: 2000,
            },
            {
                date_ms: 1672531199000,
                amount: 3000,
            },
        ]
    },
    {
        id: 2,
        title: "Car Insurance",
        description: "Monthly car insurance",
        amount: 15000,
        date_ms: 1672531199000,
        category: "Goal",
        userId: 1,
        createdAt: 1672531199000,
        goalCategory: "Personal",
        image: "https://cdn-icons-png.flaticon.com/512/5324/5324945.png",
        collectedAmounts: [
            {
                date_ms: 1672531199000,
                amount: 5000,
            },
            {
                date_ms: 1672531199000,
                amount: 2000,
            },
            {
                date_ms: 1672531199000,
                amount: 3000,
            },
        ]
    }

]

