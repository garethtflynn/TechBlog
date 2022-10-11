const router = require('express').Router();
const { User, Post, Comment } = require('../models')
const withAuth = require('../../utils/auth'); 


router.get('/', withAuth, async (req, res) => { 
    try {
        const postData = await Post.findAll({
            where:
            {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Comment,
                    attributes: ['username']
                }
            ]
        })
        const posts = postData.map((posts) => posts.get({ plain: true }));

        res.render("dashboard", {
          posts,
          logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.redirect('/');
    }
});

router.get('/id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id)
        if (postData) {
            const post = postData.map((posts) => posts.get({ plain: true }));
            res.render('edit-post', {post})
        } else {
            res.status(404).end()
        }
    } catch (err) {
        res.redirect('login')
    }
});


router.get('/new', (req,res) =>
{
    res.render('new-post')
})

module.exports = router;