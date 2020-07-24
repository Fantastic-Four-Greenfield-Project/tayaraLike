import React from 'react'
import axios from 'axios'

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            inside: []
        })
    }
    componentWillMount() {
        axios.get("/post").then((data) => {
            this.setState({ inside: data.data });
        });
    }

    render() {
        return (
            <div>
                {this.state.inside.map((element, index) => {
                    return (
                        <div key={index} className="dates">
                            <div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-text">
                                                    categories : <p> {element.categories}</p>
                                                </h5>
                                                <h5 className="card-text">@Mail : {element.adressMail}</h5>
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

export default Landing