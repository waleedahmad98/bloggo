import React, { Component } from 'react'
import Signup from './Signup'
import Signin from './Signin';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

export default class Form extends Component {
    render() {
        return (
            <div className="credential-container">
                <div className="row">
                    <div className="credentials-title ms-5 mt-3">Bloggo.</div>
                </div>
                <div className="row">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Navigate to="/register" />} />
                            <Route path="/register" element={<Signup />} />
                            <Route path="/login" element={<Signin setLogin = {this.props.setLogin} />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        )
    }
}
