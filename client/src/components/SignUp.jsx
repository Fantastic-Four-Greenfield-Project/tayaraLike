import React, { useImperativeHandle } from "react";
import axios from 'axios'


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adressMail: "",
            userName: "",
            alertMessage: "",
            isSigned: false
        }
    }


    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSignUp() {
        axios.post('http://localhost:3000/signUp', this.state).then(data => {
            let userData = JSON.parse(data.config.data)
            this.setState({ adressMail: userData.adressMail, userName: userData.userName, alertMessage: data.data, isSigned: !this.state.isSigned })
        })
    }


    renderAlert() {
        if (this.state.isSigned === true) {
            // return <h1> {this.state.alertMessage}</h1>
            return <span className="modal-dialog modal-sm alertMessage">{this.state.alertMessage}</span>
        } else if (this.state.isSigned === false) {
            return <h1></h1>
        }
    }


    render() {
        return (
            <div>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User Name</label>
                        <input onChange={this.onChange.bind(this)} name="userName" type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.onChange.bind(this)} name="adressMail" type="email" className="form-control" aria-describedby="emailHelp" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.onChange.bind(this)} name="password" type="password" className="form-control" />
                    </div>
                    <button className="btn btn-info btn-lg button" data-toggle="modal" data-target="#myModal" type="submit" onClick={this.handleSignUp.bind(this)}>Sign Up</button>
                    {this.renderAlert()}
                </div>
            </div>
        );
    }


}

export default SignUp
