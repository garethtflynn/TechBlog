const { Post } = require('../models');

const postData = [
    {
        title: 'MVC Model',
        post_content: 'MVC model stands for Model, View, Controller',
        user_id: '1'
    },
    {
        title: 'Async/Await',
        post_content: 'Asyn and await are super helpful in learning to write Javascript',
        user_id: '2'
    },
    {
        title: 'Github Branches',
        post_content: 'setting up github braches is great when you are working in a group',
        user_id: '3'
    },
    {
        title: 'Node Package Manager',
        post_content: 'When cloning a repository always remeber to run npm i to install all dependencies',
        user_id: '4'
    },
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;