import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer", "");
    if(!token) return res.status(401).json({message:"Access denied, no token"})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRERT);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message:"invalid token"})
    }
}