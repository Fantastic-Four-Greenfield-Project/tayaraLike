import React from "react";
import axios from "axios";
import { Link, withRouter } from 'react-router-dom'
import logo from '../../../logo.png'

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    logOut(event) {
        event.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
        const userLogIn = (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <br></br>
                    <div className="navbar-nav">
                        <Link to="/signIn">
                            <a className="nav-item nav-link active" href="#">
                                Log In <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to="/signUp">
                            <a className="nav-item nav-link active" href="#">
                                Sign Up <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to="/signUp">
                            <a className="nav-item nav-link active" href="#">
                                Log In As An Admin <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        )
        const userLogged = (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav">
                        <Link to="/profile">
                            <a className="nav-item nav-link active" href="#">
                                User <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#" onClick={this.logOut.bind(this)}>
                            Log Out <span className="sr-only">(current)</span>
                        </a>
                    </div>
                </nav>
            </div>
        )
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav">
                        <Link to="/">
                            <a className="nav-item nav-link active" href="#">
                                {/* Home <span className="sr-only">(current)</span> */}
                                <img src={logo} className="logo"></img>
                            </a>
                        </Link>
                        {localStorage.usertoken ? userLogged : userLogIn}
                    </div>
                </nav>
            </div>
        )
    }
}
export default withRouter(Landing)
