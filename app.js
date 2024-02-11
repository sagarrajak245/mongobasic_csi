
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello World!'); // Send a response when the root URL is accessed
});

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sagarrajak245:VMovvE4RMhTO4m4s@temp-pro-db.merw73l.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const user = require('./models/userdata'); // Import the user model

async function insertUser() {
    await user.create({
        name: 'Sagar',
        email: 'sagarrajak@gmail.com',
    });


}


insertUser();

app.listen(3000, () => {
    console.log('Server is running on port 3000'); // Correct the console log message to reflect the correct port
});
