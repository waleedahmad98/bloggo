import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
    const [title, setTitle] = useState(null);
    const [summary, setSummary] = useState(null);
    const [text, setText] = useState(null);
    const [img, setImg] = useState(null);
    const [author, setAuthor] = useState(null);
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/posts/edit/${id}`).then((res) => {
            if (res.data.status != "500") {
                setTitle(res.data.title);
                setSummary(res.data.description);
                setText(res.data.body);
                setImg(res.data.image);
                setAuthor(res.data.author);
            }
            else{
                navigate("/");
            }
        });
    }, [])

    
    return (
        <div className='h-100'>

            <img className='w-100' src = {img} /> 
            
            <div className='container mt-5 mb-5'>
                <h1 style = {{fontFamily: "open-s-bol"}}>{title}</h1>
                <p style = {{fontFamily: "open-s-med"}}>{text}</p>
                <p className="fst-italic" style = {{fontFamily: "open-s-med"}}>{author}</p>
                <button className='btn btn-primary' onClick = {()=>{navigate("/")}}>Go Back</button>
            </div>
        </div>
    )
}
