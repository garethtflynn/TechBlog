const { Comment } = require('../models');

const commentData = [
    {
        comment_content: 'oh is that what it stands for?! Never knew. thanks!',
        user_id: '2',
        post_id: '1'
    },
    {
        comment_content: 'I always struggled with async await! gonna go youtube it',
        user_id: '3',
        post_id: '2'
    },
    {
        comment_content: 'ohh this is good to know. i have a group project coming up',
        user_id: '4',
        post_id: '3'
    },
    {
        comment_content: 'This must be why i get so many errors when i try and run the file in node',
        user_id: '1',
        post_id: '4'
    },
]


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;