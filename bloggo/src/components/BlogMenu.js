import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function BlogMenu(props) {
    let navigate = useNavigate();
    const createBlog = () => {
        props.allow(true);
        navigate("/create");
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" style = {{fontFamily:"open-s-bol"}} href="#">Bloggo</a>

                    <div class="d-flex">
                        <button class="btn btn-outline-primary me-2" >Manage Blogs</button>
                        <button class="btn btn-outline-success me-2" onClick={createBlog}> Create Blog</button>
                        <button class="btn btn-outline-danger" onClick = {()=>{
                            localStorage.removeItem('accessToken');
                            props.setLogin(localStorage.getItem('accessToken'));
                            }}>Logout</button>
                    </div>
                </div>
            </nav >
    )
}
