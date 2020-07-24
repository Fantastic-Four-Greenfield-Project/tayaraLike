import React from "react";
import jwt_decode from 'jwt-decode'
import UserInterface from "./UserInterface.jsx";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            adressMail: ""
        }
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            userName: decoded.userName,
            adressMail: decoded.adressMail
        })
    }
    render() {
        return (
            <div>
                <UserInterface />
            </div>

        );
    }
}
export default Profile















