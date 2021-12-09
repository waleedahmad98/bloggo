import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path = "/login" element = {<Navigate to = "/"/>}></Route>
                    </Routes>
                </Router>
                This is the main page
                
            </div>
        )
    }
}
