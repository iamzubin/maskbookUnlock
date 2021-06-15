import express from 'express';
import bodyParser from 'body-parser';

import connectDB from '../config/database'


import requireSomething from './controller/middleware'

import requestPost from "./routes/requestPost";
import  addPost from "./routes/addPost";
import  verifyPost from "./routes/verifyUnlock";



connectDB();

const app = express();

app.use(requireSomething)


app.use("/request",requestPost )
app.use("/add",addPost )
app.use("/verify",verifyPost )


app.get('/', (req, res) => res.send('Hello World!'));



export {app};