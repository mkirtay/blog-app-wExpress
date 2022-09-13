const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.get('/all-blogs', blogController.all_blog )
router.get('/all-blogs/:id', blogController.detail_blog)
router.post('/add-new-blog', blogController.add_blog)
router.post('/edit-blog/:id', blogController.edit_blog)
router.delete('/delete-blog/:id', blogController.delete_blog)


module.exports = router