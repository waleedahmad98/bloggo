import { Navigate } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog(props) {
    const [title, setTitle] = useState(null);
    const [summary, setSummary] = useState(null);
    const [text, setText] = useState(null);
    const [img, setImg] = useState(null);
    const author = localStorage.getItem("user");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('image', img);
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('text', text);
        formData.append('author', author);
        axios.post("http://127.0.0.1:8000/posts/create", formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            if (res.data.code === "-1") {
                alert(res.data.status);
            }
            else {
                alert("Successfully created blog!");
            }
        }
        )
    }


    if (!props.allow)
        return (
            <Navigate to="/" />
        )
    else {
        return (
            <div className='container'>
                <form onSubmit={handleSubmit} >
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div class="mb-3">
                        <label for="desc" class="for    m-label">Description</label>
                        <input type="text" class="form-control" id="desc" value={summary} onChange={(e) => { setSummary(e.target.value) }} />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">Body</label>
                        <input type="text" class="form-control" id="body" value={text} onChange={(e) => { setText(e.target.value) }} />
                    </div>
                    <div class="mb-3">
                        <label for="img" class="form-label">Image</label><br/>
                        <input type="file"  id="img" name="img" onChange={(e) => { setImg(e.target.files[0]) }} />
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input type="text" class="form-control" id="author" value={author} disabled/>
                    </div>

                    <button type="submit" class="btn btn-success">Create</button>
                    <button type="submit" class="btn btn-primary ms-2" onClick = {()=>{navigate("/")}}>Home</button>
                </form>
            </div>
        )
    }
}

