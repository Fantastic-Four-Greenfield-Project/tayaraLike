import React from "react";
import axios from "axios";

class UserPostList extends React.Component {
    constructor(props) {
        super(props);
    }

    deletePost(e) {
        axios
            .delete(`/deletePost/${e.target.id}`)
            .catch((error) => console.log(error));

        location.reload();
    }

    render() {
        console.log(
            "user list inside userlist component",
            this.props.userPostsListArray
        );
        return this.props.userPostsListArray.map((post, index) => {
            return (
                <center>
                    <div className="Users">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-text">
                                            DESCRIPTION :{post.description}
                                        </h5>
                                        <p className="card-title">PRICE:{post.price} DTN</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-danger col-sm-2 thumb"
                                id={post._id}
                                onClick={this.deletePost.bind(this)}
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
export default UserPostList;
