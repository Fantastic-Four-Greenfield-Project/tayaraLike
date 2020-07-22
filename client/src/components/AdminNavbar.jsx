import React from "react";
import AdminUserList from "./AdminUserList.jsx";
import axios from "axios";
import UserPostList from "./UserPostList.jsx";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList: [] };
  }

  retriveAllData() {
    console.log("you clicked");
    axios
      .get("/retriveAllTheUsers")
      .then((resonse) => {
        const data = resonse.data;
        console.log("Get the data succefully.", data);
        this.setState({ userList: data });
        console.log("state inside fetch", this.state);
      })
      .catch((err) => {
        console.log(err);
      });
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
        console.log(
          "State from USERLIST-NAVBAR",
          this.state.userPostsListArray
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletePost(e) {
    axios
      .delete(`/deletePost/${e.target.id}`)
      .catch((error) => console.log(error));

    location.reload();
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Admin Interface
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
              <a className="nav-item nav-link" href="#">
                Features
              </a>
              <a
                className="nav-item nav-link"
                href="#"
                onClick={this.retriveAllData.bind(this)}
              >
                Users
              </a>
              <a
                className="nav-item nav-link"
                href="#"
                onClick={this.retriveUserPosts.bind(this)}
              >
                All Users Posts
              </a>
            </div>
          </div>
        </nav>
        <AdminUserList userList={this.state.userList} />
      </div>
    );
  }
}

export default AdminNavbar;
