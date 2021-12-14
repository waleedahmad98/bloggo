var postModel = require('../models/posts.model');
var mongoose = require('mongoose');

const createPost = async (title, desc, body, img, author) => {
    new postModel({
        title: title,
        description: desc,
        body: body,
        image: img,
        author: author
    }).save((error, saved) => {
        if (error) throw error
    })
    return { "status": "success", "code": "1" };
}

const getPosts = async () => {
    return await postModel.find({});
}

const getUserPosts = async (email) => {
    return await postModel.find({'author': `${email}`}, 'title description body image');
}

const deletePost = async (id) => {
    return await postModel.deleteOne({_id: `${mongoose.Types.ObjectId(id)}`});
}


module.exports = {createPost, getPosts, getUserPosts, deletePost}; 