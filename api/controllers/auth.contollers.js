import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    if (!username || !email || !password || password === "" || email === "" || username ==="") {
        return res.status(400).json({message: "All fields must be provided!"});
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username, email, password: hashedPassword
    })
    try {
        await newUser.save();
        res.json({message: "Signup Successful"});
    } catch (error) {
        next(error);
    }
}