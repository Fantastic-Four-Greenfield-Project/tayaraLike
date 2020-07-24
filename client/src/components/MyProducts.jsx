import React from "react";
import axios from "axios";
import UserPostList from "./UserPostList.jsx";
// import AdminNavbar from "./AdminNavbar.jsx";
// import UserAddPost from "./SellAProduct.jsx";

class MyProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            allUsers: [],
            arrayOfPosts: []
        }
    }

    retriveUserPosts(adressMail) {
        axios.get(`one/${adressMail}`).then((allPosts) => {
            let arrayOfAllPosts = allPosts.data
            this.setState({
                arrayOfPosts: arrayOfAllPosts
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                {this.state.arrayOfPosts.map((post) => {
                    return <div>
                        {post.adressMail}
                        {post.categories}
                        {post.img}
                        {post.description}
                        {post.price}
                    </div>
                })}
            </div>
        );
    }
}

export default MyProducts;
