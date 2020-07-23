import React from "react";
import axios from "axios";
import AdminUserList from "./AdminUserList.jsx";
import UserPostList from "./UserPostList.jsx";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      userPostsListArray: [],
      viewCount: 0,
    };
  }

  retriveAllData() {
    console.log("you clicked");
    axios
      .get("/retriveAllTheUsers")
      .then((resonse) => {
        const data = resonse.data;
        console.log("Get the data succefully.", data);
        this.setState({
          userList: data,
          viewCount: 1,
        });
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
        const posts = resonse.data;
        this.setState({
          userPostsListArray: posts,
          viewCount: 2,
        });
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

        {this.state.viewCount === 1 ? (
          <AdminUserList userList={this.state.userList} />
        ) : this.state.viewCount === 2 ? (
          <UserPostList userPostsListArray={this.state.userPostsListArray} />
        ) : null}
      </div>
    );
  }
}

export default AdminNavbar;
