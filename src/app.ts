import express from 'express';

import connectDB from '../config/database'


import { checkEthSignature } from './controller/middleware'

import requestPost from "./routes/requestPost";
import  addPost from "./routes/addPost";
import  verifyUnlock from "./routes/verifyUnlock";



connectDB();

const app = express();

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });

// app.use(requireSomething)
app.use(express.json());
app.use(express.urlencoded());


app.use("/request",requestPost )
app.use("/add",addPost )
app.use("/unlock",verifyUnlock )


app.get('/', (req, res) => res.send('Hello World!'));



export {app};