import express ,{urlencoded} from 'express'

import cookieParser from 'cookie-parser'
import cors from 'cors'
const app=express()
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
  };
  app.use(cors(corsOptions));



app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true,limit:"250kb"}))

// user route 
import userRoute from '../src/routes/user.route.js'
app.use('/api/v1/users',userRoute)

// create post route 
import createPostRoute from '../src/routes/createPost.route.js'
app.use('/api/v1/post',createPostRoute)

export {app}