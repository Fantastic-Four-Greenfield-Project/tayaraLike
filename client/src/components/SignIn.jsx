import React, { useImperativeHandle } from "react";
import axios from 'axios'


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adressMail: "",
            password: ""
            // isSigned : false
        }
    }

    // renderAlert() {
    //     if (this.state.isSigned === true) {
    //         return <h1> {this.state.alertMessage}</h1>
    //     } else if (this.state.isSigned === false) {
    //         return <h1></h1>
    //     }
    // }

    handleSignIn() {
        axios.post('http://localhost:3000/signIn', this.state).then(data => {
            console.log(data.data)
            localStorage.setItem("usertoken", data.data)
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
                    <button type="submit" className="btn btn-primary" onClick={this.handleSignIn.bind(this)}>Sign In</button>
                    {/* {this.renderAlert()} */}
                </div>
            </div>

        );
    }
}


export default SignIn















