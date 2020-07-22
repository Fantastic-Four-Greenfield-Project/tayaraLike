import React from "react";
import UserNavbar from "./UserNavbar.jsx";

class UserInterface extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UserNavbar />
            </div>
        );
    }
}

export default UserInterface;
