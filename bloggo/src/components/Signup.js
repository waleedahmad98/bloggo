import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: "",
            username: "",
            password: "",
            cfpassword: ""
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, username, password, cfpassword } = this.state;


        if (password === cfpassword) {

            var salt = bcrypt.genSaltSync(10);
            var hpassword = bcrypt.hashSync(password, salt);
            const creds = {
                email,
                username,
                hpassword,
                salt
            };
            axios.post("http://127.0.0.1:8000/register", creds).then((res) => {
                if (res.data.code === "-1"){
                    alert(res.data.status);
                }
            });
        }
    }


    render() {
        return (
            <div>
                <div className="d-flex flex-row nav-tab ms-5 mt-3">
                    <Link className="register-link active" to="/register">Register</Link>
                    <Link className="login-link" to="/login">Login</Link>
                </div>
                <form className="credentialform mt-5" onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} class="form-control" id="email" />

                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" name="username" onChange={this.handleChange} class="form-control" id="username" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} class="form-control" id="password" />
                    </div>
                    <div class="mb-3">
                        <label for="cfpassword" class="form-label">Confirm Password</label>
                        <input type="password" name="cfpassword" onChange={this.handleChange} class="form-control" id="cfpassword" />
                    </div>


                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>

        )
    }
}
