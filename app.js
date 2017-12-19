let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_app');

//APP set up
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


//Mongoose/Model Confog
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

let Blog = mongoose.model('Blog', blogSchema);

//RESTFUL ROUTES

app.get('/', function(req, res) {
    res.render('blogs');
});


app.get('/blogs', function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("error!")
        } else {
            res.render('index', { blogs: blogs });
        }
    });
});



app.listen(3000, function() {
    console.log('The BlogApp Server has started');
});