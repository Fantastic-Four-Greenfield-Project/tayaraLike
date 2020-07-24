import React from "react";
import SellAProduct from './SellAProduct.jsx'

class UserInterface extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="Navbar">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">UserInterface</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="#">My Products</a>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="#">Sell A product</a>
                            </div>
                        </div>
                    </nav>
                </div>



































                <SellAProduct />
                {/* <MyProducts /> */}
            </div>
        );
    }
}

export default UserInterface;
