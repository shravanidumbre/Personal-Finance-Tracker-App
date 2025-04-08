const checkUser = (req, res, next) => {
    const userId = req.body.userId;
    
    if (!userId) {
        return res.status(401).json({ message: 'User ID is required in request body' });
    }

    next();
};

module.exports = { checkUser };