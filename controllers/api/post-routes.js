const router = require('express').Router();
const { Post } = require('../../models')
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create(
            {
                title: req.body.title,
                post_content: req.body.post_content,
                user_id: req.session.user_id
            }
        )
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.put('/id', withAuth, (req, res) => {
    Post.update(req.body, {
            where: {
                id: req.params.id,
            }
    }).then((postUpdate) => {
        res.status(200).json(postUpdate)
    }).catch((err) => {
        res.status(500).json(err);
    })  
})


router.delete("/:id", withAuth, async (req, res) => {
    // delete a category by its `id` value
    try {
      const postDelete = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!postDelete) {
        res.status(404).json({ message: "no post with this id" });
        return;
      }
      res.status(200).json(postDelete);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;