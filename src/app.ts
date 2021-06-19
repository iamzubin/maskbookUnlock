import express from 'express';

import connectDB from '../config/database'

import requestPost from "./routes/requestPost";
import  addPost from "./routes/addPost";
import { errorHandler } from './controller/middleware';



connectDB();

const app = express();


app.use(express.urlencoded());
app.use(express.json());


app.use("/request",requestPost )
app.use("/add",addPost )


app.get('/', (req, res) => res.send('Hello World!'));

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

app.use(errorHandler)


export {app};