import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json({message: "Api is working fine!"});
};

export const updateUser = async ( req, res, next) => {
    
}