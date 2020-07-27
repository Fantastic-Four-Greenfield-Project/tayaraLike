import React from "react";
import ReactDOM from "react-dom"
import SellAProduct from './SellAProduct.jsx'
import MyProducts from './MyProducts.jsx'

class UserInterface extends React.Component {
    constructor(props) {
        super(props)
    }

    handleMyProducts() {
        ReactDOM.render(<MyProducts />, document.getElementById('MyProducts'))
    }
    handleSellAproduct() {
        ReactDOM.render(<SellAProduct />, document.getElementById('SellAProduct'))
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
                                <a className="nav-item nav-link" href="#" onClick={this.handleMyProducts.bind(this)}>My Products</a>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="#" onClick={this.handleSellAproduct.bind(this)}>Sell A product</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="MyProducts"></div>
                <div id="SellAProduct"></div>
            </div >
        );
    }
}
export default UserInterface;
