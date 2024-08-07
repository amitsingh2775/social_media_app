import jwt from 'jsonwebtoken';
import {User} from '../models/users.model.js'



export const jwtVerify = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
        console.log("Token from cookies or header:", token);
        
        if (!token) {
            return res.status(400).json({message:"unauthorize access",success:false})
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        //console.log("Decoded Token:", decodedToken);

        const user = await User.findById(decodedToken?.userId).select("-password");
        if (!user) {
            return res.status(400).json({message:"login your self",success:false})
        }

        req.user = user;
       // console.log("req.user is->",req.user);
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(400).json({message:"something went wrong",success:false})
    }
};
