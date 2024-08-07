import { Router } from "express";
import { Create_Post } from "../controller/createPost.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";
import {upload} from '../middlewares/mullter.middleware.js'

const router=Router()

router.route('/create-post').post( 
    jwtVerify,
    upload.fields([
        { name: "profileImage", maxCount: 1 }
    ]),
    Create_Post)

export default router