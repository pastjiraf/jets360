import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Please log in.' });
    }

    
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
    }
};

export default authUser;
