const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;

const Film = mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
});

app.get('/', async (req, res) => {
    const films = await Film.find();
    res.send(films);
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
    mongoose.connect('mongodb+srv://diogodsxavier:7gc9SqH6EzTAZOgZ@cluster0.lhhyff3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('app running');
});