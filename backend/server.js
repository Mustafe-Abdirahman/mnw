const express = require('express');
const Workouts = require('./routes/workout');
const db = require('./db/db');

require('dotenv').config();


const app = express()


//midllewares 

app.use(express.json())

//port 
const PORT = process.env.PORT || 4000


//ROUTES 
app.use('/api/workouts', Workouts)

app.listen(PORT,() => {
    db();
    console.log(`the listening port is ${PORT}`);
})