const Blog = require('../models/blogs');


const all_blog = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const detail_blog =  (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(result => res.send(result))
        .catch(err => console.log(err))
}

const delete_blog = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({deleteId: id})
        })
        .catch((err) => {
            console.log(err)
        })
}

const edit_blog =  (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(
        id,
        {
            $set: {
                'title': req.body.title,
                'short': req.body.short,
                'long': req.body.long
            }
        },
    )
        .then(result => {
            res.redirect('/all-blogs/'+ id)
            /*res.send(result) */
        })
        .catch((err) => {
            console.log(err)
        })

}

const add_blog = (req, res) => {
    const newBlog = new Blog(req.body)

    newBlog.save()
        .then((result) => {
            res.redirect('/all-blogs')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    all_blog,
    detail_blog,
    delete_blog,
    edit_blog,
    add_blog
};