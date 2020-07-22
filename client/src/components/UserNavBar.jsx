import React from "react";
import axios from "axios";
import UserPostList from "./UserPostList.jsx";
import AdminNavbar from "./AdminNavbar.jsx";
import UserAddPost from "./UserAddPost.jsx";

class UserNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userPostsListArray: [] };
    }

    retriveUserPosts() {
        console.log("you clicked");
        axios
            .get("/getAllPosts")
            .then((resonse) => {
                const data = resonse.data;
                console.log("Get the data succefully.", data);
                this.setState({ userPostsListArray: data });
                console.log("state inside fetch", this.state);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <div className="Navbar">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">
                            User Interface
            </a>
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
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </a>

                                {/* FINISH THIS FUNCTION ON CLICK TO RENDER THE COMPONENT TO 
                CREATE A PRODUCT */}
                                <a className="nav-item nav-link" href="#">
                                    Post A Product
                </a>
                                {/* FINISH THIS FUNCTION ON CLICK TO RENDER THE COMPONENT TO 
                CREATE A PRODUCT */}

                                <a
                                    className="nav-item nav-link"
                                    href="#"
                                    onClick={this.retriveUserPosts.bind(this)}
                                >
                                    Posts
                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <UserPostList userPostsListArray={this.state.userPostsListArray} />
            </div>
        );
    }
}

export default UserNavbar;
