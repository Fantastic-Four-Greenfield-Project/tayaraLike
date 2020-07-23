import React from "react";
import SellAProduct from './SellAProduct.jsx'

class UserInterface extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SellAProduct />
                {/* <MyProducts /> */}
            </div>
        );
    }
}

export default UserInterface;
