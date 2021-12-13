import postModel from "../db/models/posts.model.js";

export const createPost = async (title, desc, body, img, author) => {
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

export const getPosts = async () => {
    return await postModel.find({});
}