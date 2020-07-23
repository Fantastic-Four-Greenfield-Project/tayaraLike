import React from "react";
import axios from "axios";
import UserPostList from "./UserPostList.jsx";
import AdminNavbar from "./AdminNavbar.jsx";
import UserAddPost from "./SellAProduct.jsx";

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
                <div className="Navbar">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">User Interface</a>
                        {/* <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></a>
                                <a className="nav-item nav-link" href="#">Sell a product</a>
                                <a className="nav-item nav-link" href="#" onClick={this.retriveUserPosts.bind(this)}>My Products</a>
                            </div>
                        </div>
                    </nav>
                </div>
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
