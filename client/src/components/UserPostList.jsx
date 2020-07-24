// import React from "react";
// import axios from "axios";

// class UserPostList extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     deletePost(e) {
//         axios
//             .delete(`/deletePost/${e.target.id}`)
//             .catch((error) => console.log(error));

//         location.reload();
//     }

//     render() {
//         return this.props.userPostsListArray.map((post) => {
//             return (
//                 <center>
//                     <div className="Users">
//                         <div className="row">
//                             <div className="col-sm-2">
//                                 <div className="card">
//                                     <div key={post._id} className="card-body">
//                                         <h5>User  : {post.adressMail}</h5>
//                                         <h5 className="card-text">
//                                             DESCRIPTION : {post.description}
//                                         </h5>
//                                         <h5 className="card-text">PRICE : {post.price} DTN</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="btn btn-outline-danger col-sm-2 thumb"
//                                 id={post._id}
//                                 onClick={this.deletePost.bind(this)}
//                             >
//                                 DELETE
//               </button>
//                         </div>
//                     </div>
//                 </center>
//             );
//         });
//     }
// }
// export default UserPostList;
