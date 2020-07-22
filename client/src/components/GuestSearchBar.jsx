import React from "react";
import axios from "axios";

class GuestSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inside: [],
        };
    }
    componentWillMount() {
        axios.get("/post").then((data) => {
            this.setState({ inside: data.data });
        });
    }

    view() {
        return <div>{this.state.id}</div>;
    }
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        Guest Interface
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
                    <br></br>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </div>
                    </div>

                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">
                            Log in-Sign in <span className="sr-only">(current)</span>
                        </a>
                    </div>
                </nav>

                {this.state.inside.map((element, index) => {
                    return (
                        <div key={index} className="dates">
                            <div className="Users">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-text">
                                                    categories : <p> {element.categories}</p>
                                                </h5>
                                                <h5 className="card-text">Name : {element.userName}</h5>
                                                <h5 className="card-text">
                                                    description : <br></br> <p> {element.description} </p>
                                                </h5>
                                                <p className="card-title">Price: {element.price} DT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default GuestSearchBar;
