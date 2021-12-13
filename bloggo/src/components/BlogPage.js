import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogMenu from './BlogMenu';
import BlogPosts from './BlogPosts';
import CreateBlog from './CreateBlog';

export default class BlogPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            allowCreate: false
        }
    }

    setAllow = (b) => {
        this.setState({allowCreate: b})
        console.log("yes");
    }

    render() {
        return (
            <div className = "h-100" style={{ backgroundColor: "white"}}>

                <Router>
                    <Routes>
                        <Route path="/login" element={<Navigate to="/" />}></Route>
                        <Route path="/register" element={<Navigate to="/" />}></Route>
                        <Route path = "/create" element={<CreateBlog allow = {this.state.allowCreate}/>}></Route>
                        <Route path = "/" element = {<><BlogMenu setLogin = {this.props.setLogin} allow = {this.setAllow}/><BlogPosts/></>}></Route>
                    </Routes>
                </Router>

                

            </div>
        )
    }
}
