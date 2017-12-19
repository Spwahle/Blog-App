let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_app');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


//M ongoose/Model Confog
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

let Blog = mongoose.model('Blog', blogSchema);

//RESTFUL ROUTES

app.listen(3000, function() {
    console.log('The BlogApp Server has started');
});