import React, { Component } from 'react'
import Form from './Form'

export default class LoginPage extends Component {
    render() {
        return (
            <div className = "row h-100 g-0">
                <div className = "col-md-5 col-sm-12 h-100">
                    <Form setLogin = {this.props.setLogin}/>
                </div>
                <div className = "col-md-7">
                    <div className = "greeting-title">Blog your thoughts away.</div>
                </div>
            </div>
        )
    }
}
