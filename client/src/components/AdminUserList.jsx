import React from "react";
import axios from "axios";

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteUser(e) {
    axios
      .delete(`/deleteUserById/${e.target.id}`)
      .catch((error) => console.log(error));
    location.reload();
  }

  render() {
    console.log("user list inside userlist component", this.props.userList);
    return this.props.userList.map((user, index) => {
      return (
        <center>
          <div className="Users">
            <div className="row">
              <div className="col-sm-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-text">Account : {user.userType}</h5>
                    <p className="card-title">User Name:{user.userName}</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger col-sm-2 thumb"
                id={user._id}
                onClick={this.deleteUser.bind(this)}
              >
                DELETE
              </button>
            </div>
          </div>
        </center>
      );
    });
  }
}
export default UserList;
