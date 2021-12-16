import axios from 'axios';
import Pagination from './Pagination';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogPosts() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(6);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/posts/findAll").then((res) => {
            var arr = [];
            for (let i = 0; i < res.data.length; i++) {
                arr.push(res.data[i]);
            }

            setPosts(arr);
        })
    }, [])

    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const changeCurrentPage = (number) => {
        setCurrentPage(number);
    }

    return (
        <>
        <div className='container d-flex justify-content-around flex-wrap'>
            {currentPagePosts.map(p => (<div class="card mt-5 mx-2 my-2" onClick = {()=>{navigate(`/blog/${p._id}`)}} style={{ width: "18rem" }}>
                <img src={`http://localhost:8000/posts/uploads/${p.image}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <p class="card-text">{p.author}</p>
                </div>
            </div>))}


        </div>
        <Pagination perPage={perPage} changePage={changeCurrentPage} count={posts.length} />
    </>
    )
}
