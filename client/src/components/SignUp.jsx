import React, { useImperativeHandle } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


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
        axios.post('http://localhost:3000/signUp', this.state).then(response => {
            if (response) {
                this.props.history.push("/")
            }
            // else {
            //     // this.setState({ isSigned: !this.state.isSigned })
            //     this.renderAlert()
            // }
        }).catch(err => {
            console.log(err)
        })
    }

    renderAlert() {
        return "SOSOSO"
    }

    render() {
        return (
            < div >
                <form class="text-center border border-light p-5" action="#!">
                    <p class="h4 mb-4">Welcome to TayaraLike</p>
                    <input id="defaultLoginFormPassword" class="form-control mb-4" placeholder="User Name" onChange={this.onChange.bind(this)} name="userName" />
                    <input id="defaultLoginFormEmail" class="form-control mb-2" placeholder="E-mail" onChange={this.onChange.bind(this)} name="adressMail" />
                    <input onChange={this.onChange.bind(this)} name="password" type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />
                    <Link to='/signup' >
                        <button class="btn btn-info btn-block my-4" type="submit" onClick={this.handleSignUp.bind(this)}>Register</button>
                    </Link>
                </form>
            </div >
        );
    }

}

export default SignUp
