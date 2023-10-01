require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const Routes = require('./Routes/Routes');

app.use(express.json());
app.use(cors());
app.use('/', Routes);

app.listen(port, async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nxhpsct.mongodb.net/TaskZone`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`Server Running On Port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    };
});
