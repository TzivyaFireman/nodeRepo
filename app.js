const express = require('express');
const userRouter = require('./userRouter');
const app = express();

app.use(express.json());

app.use('/', userRouter);

app.listen(3000, () => {
    console.log(`Server Started at 3000`)
})