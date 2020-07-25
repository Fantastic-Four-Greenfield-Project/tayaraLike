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
            < div >
                {
                    this.state.inside.map((element, index) => {
                        return (
                            <div key={index} className="card mb-3" >
                                <div className="card-body">
                                    <h4 className="card-title"> Categorie : {element.categories}</h4>
                                    <img src={`http://localhost:3000/uploads/${element.img}`} class="img-fluid z-depth-1 rounded-circle" alt="Responsive image"></img>
                                    <h5 className="card-title">Price : {element.price}</h5>
                                    <p className="card-text">Description : {element.description}</p>
                                    <a href="#" className="btn btn-primary">Posted By : {element.adressMail}</a>
                                </div>
                            </div>
                        );
                    })
                }
            </div >
        );
    }
}

export default Landing




    // < div key = { index } className = "dates" >
    //     <div>
    //         <div className="row">
    //             <div className="col-sm-2">
    //                 <div className="card">
    //                     <div className="gallery-card-image">
    //                         <h5 className="card-text">
                                // Categorie : <p> {element.categories}</p>
    //                         </h5>
    //                         <h5 className="card-text">Mail Adress: {element.adressMail}</h5>
    //                         <h5 className="card-text">
    //                             Description : <br></br> <p> {element.description} </p>
    //                         </h5>
                            // <p className="card-title">Price: {element.price} DT</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //                     </div >