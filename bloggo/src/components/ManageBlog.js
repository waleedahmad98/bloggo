import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ManageBlog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/posts/${localStorage.getItem("user")}`).then((res) => {
            var arr = [];
            for (let i = 0; i < res.data.length; i++) {
                arr.push(res.data[i]);
            }

            setPosts(arr);
        })
    }, [])
    return (
        <div className='container d-flex justify-content-around flex-wrap'>
            {posts.map(p => (<div class="card mt-5 mx-2 my-2" style={{ width: "18rem" }}>
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <p class="card-text">{p.author}</p>
                    <button className = "btn btn-primary">Edit</button>
                    <button className = "btn btn-primary ms-2">Delete</button>
                </div>
            </div>))}


        </div>
    )
}
