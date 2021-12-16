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
    })
    return { "status": "200", "code": "1" };
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

const getPostById = async (id) => {
    return await postModel.findOne({_id: `${mongoose.Types.ObjectId(id)}`}, 'title description body image');
}

const getPostEdit = async(id) => {
    try{
        return await postModel.findOne({'_id': `${mongoose.Types.ObjectId(id)}`}, 'title description body image');
    }
    catch(e){
        return {"status":"500", "error":e};
    }
}

const updatePost =  async (id, title, desc, body, img, author) => {
    return await postModel.updateOne({_id: `${mongoose.Types.ObjectId(id)}`}, {title: title,
        description: desc,
        body: body,
        image: img,
        author: author});
}

module.exports = {createPost, getPosts, getUserPosts, deletePost, getPostEdit, updatePost, getPostById}; 