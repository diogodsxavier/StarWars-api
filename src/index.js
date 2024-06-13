const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;
mongoose.connect('mongodb+srv://diogodsxavier:BsJhbLXa9I4OtJ7P@cluster0.lhhyff3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const Film = mongoose.model('film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
});

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.post('/', async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.umage_url,
        trailer_url: req.body.trailer_url
    });

    await film.save();
    res.send(film);
});

app.listen(port, () => {
    console.log('app running');
});