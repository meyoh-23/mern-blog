import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken =  (req, res, next) => {
    console.log( req.cookies.access_token)
    const token = req.cookies.access_token;
    console.log(token);
    
    if (!token) {
        return next(errorHandler(401, 'token baaado'));
    }
    jwt.verify(token, process.env.jwt_Secret, (err, user) => {
        if (err) {
        return next(errorHandler(401, 'Unauthorized'));
        }
        req.user = user;
        next();
    });
};
