const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');



const app = express();
app.use(express.urlencoded({extended: true}))


const dbURL = 'mongodb+srv://mkirtay:.Realgame11..@nodeblog.18xhlbl.mongodb.net/node-blog?retryWrites=true&w=majority'
mongoose.connect(dbURL)
    .then((result) => app.listen(5000, () => {
        console.log("server has been started on port 5000")
    }))
    .catch((err) => console.log(err, 'baglanti kurulamadi'))

app.use('/', authRoutes)
app.use(blogRoutes)


