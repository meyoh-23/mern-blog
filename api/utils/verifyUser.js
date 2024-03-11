import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return next(errorHandler(401, "You are not authorised!"));
    };
    jwt.verify(token, process.env.jwt_Secret, (err, user) => {
        if (err) {
            return next(errorHandler(401, "Unauthorized operation!"));
        }
        req.user = user;
        console.log(user.Id)
        next();
    });
};