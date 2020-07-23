import React from "react";
import axios from "axios";

class SellAProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            img: "",
            adressMail: "",
            categories: "",
            description: "",
            price: "",
            products: []
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createAproduct() {
        axios.post("/createUsersPosts", this.state).then(posts => {
            console.log(posts)
            let newArray = this.state.products.concat(posts)
            this.setState({
                products: newArray
            })
        })
    }

    render() {
        return (
            <form>
                <div className="post-from">


                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Upload a picture of your product
            </label>


                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Mail Adress</label>
                            <input
                                name="adressMail"
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Write the categorie of the product here"
                                onChange={this.onChange.bind(this)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Categorie</label>
                            <input
                                name="categories"
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Write the categorie of the product here"
                                onChange={this.onChange.bind(this)}
                            />
                        </div>





                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Description</label>
                            <input
                                name="description"
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Write your description here"
                                onChange={this.onChange.bind(this)}
                            />
                        </div>




                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Price</label>
                            <input
                                name="price"
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Write your price here"
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                    </div>
                    <button onClick={this.createAproduct.bind(this)} type="button" className="btn btn-success">
                        Submit you product to sell
          </button>
                </div>
            </form >
        );
    }
}

export default SellAProduct;
