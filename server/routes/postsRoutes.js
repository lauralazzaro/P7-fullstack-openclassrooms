const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postsCtrl');
const commentsCtrl = require('../controllers/commentsCtrl');
const multer  =   require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('',  auth, postsCtrl.getAllPosts);
router.get('/:id', auth,postsCtrl.getOnePost);
router.delete('/:id', auth,postsCtrl.deletePost);
router.post('', auth, multer, postsCtrl.createPost);
router.put('/:id', auth, multer, postsCtrl.updatePost);

router.get('/:id/comments', auth, commentsCtrl.getAllComments);
router.delete('/:id/comments/:cmt', auth, commentsCtrl.deleteComment);
router.post('/:id/comments', auth, commentsCtrl.createComment);
router.put('/:id/comments/:cmt', auth, commentsCtrl.updateComment);

module.exports = router;