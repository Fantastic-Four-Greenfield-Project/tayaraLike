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
                <form class="text-center border border-light p-5" action="#!">
                    <p class="h4 mb-4">Sign in</p>
                    <input onChange={this.onChange.bind(this)} name="adressMail" type="email" id="defaultLoginFormEmail" class="form-control mb-2" placeholder="E-mail" />
                    <input onChange={this.onChange.bind(this)} name="password" type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />
                    <Link to='/signin' >
                        <button onClick={this.handleSignIn.bind(this)} class="btn btn-info btn-block my-4" type="submit">Sign in</button>
                    </Link>
                </form>
            </div>

        );
    }
}
export default SignIn

