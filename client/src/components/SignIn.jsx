import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adressMail: "",
            userName: "",
            alertMessage: "",
            isSigned: false
        }
    }

    renderAlert() {
        if (this.state.isSigned === true) {
            // return <h1> {this.state.alertMessage}</h1>
            return <span className="modal-dialog modal-sm alertMessage">{this.state.alertMessage}</span>
        } else if (this.state.isSigned === false) {
            return <h1></h1>
        }
    }

    handleSignIn() {
        axios.post('http://localhost:3000/signIn', this.state).then(response => {
            localStorage.setItem("usertoken", response.data)
            if (response.data) {
                this.props.history.push("/profile")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={this.state.adressMail} onChange={this.onChange.bind(this)} name="adressMail" type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.password} type="password" className="form-control" name="password" onChange={this.onChange.bind(this)} />
                    </div>
                    <Link to='/signin' >
                        <button type="submit" className="btn btn-primary" onClick={this.handleSignIn.bind(this)}>Sign In</button>
                    </Link>
                </div>
            </div>

        );
    }
}


export default SignIn















