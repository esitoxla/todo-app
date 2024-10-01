import express from 'express';
import todoRouter from './routes/todo.js';

//create an express app
const app = express();

//Use routes
app.use(todoRouter);

//listen for incoming requests
app.listen(3000,() => {
    console.log('App is listening on port 3000');
});