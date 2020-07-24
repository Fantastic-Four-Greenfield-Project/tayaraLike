import React from "react";
import axios from "axios";
import { link } from 'react-router-dom'

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
    createAproduct(event) {
        event.preventDefault()
        axios.post("/createUsersPosts", this.state).then(posts => {
            let newArray = this.state.products.concat(posts)
            this.setState({
                products: newArray
            })
        })
    }
    render() {
        return (
            <form class="text-center border border-light p-5" action="#!">
                <p class="h4 mb-4">Please Fill All The Inputs</p>
                <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" />
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <br></br>
                <input onChange={this.onChange.bind(this)} name="adressMail" type="email" id="defaultLoginFormEmail" class="form-control mb-2" placeholder="E-mail" />
                <br></br>
                <label for="exampleForm2">Categorie</label>
                <input onChange={this.onChange.bind(this)} name="categories" type="text" id="exampleForm2" class="form-control" />
                <br></br>
                <div class="form-group">
                    <label for="exampleFormControlTextarea3">Description</label>
                    <textarea onChange={this.onChange.bind(this)} name="description" class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
                </div>
                <br></br>
                <input onChange={this.onChange.bind(this)} name="price" class="form-control form-control-sm" type="text" placeholder="Price in Tunisian Dinars" />
                <br></br>
                <button onClick={this.createAproduct.bind(this)} class="btn btn-info btn-block my-4" type="submit">Validate</button>
                {/* {this.alertM()} */}
            </form >
        );
    }
}
export default SellAProduct;


{/* <form>
            //     <div className="post-from">
            //         <div className="custom-file">
            //             <input
            //                 type="file"
            //                 className="custom-file-input"
            //                 id="inputGroupFile01"
            //                 aria-describedby="inputGroupFileAddon01"
            //             />
            //             <label className="custom-file-label" htmlFor="inputGroupFile01">
            //                 Upload a picture of your product
            // </label>
                        // <div className="form-group">
                        //     <label htmlFor="formGroupExampleInput">Mail Adress</label>
                        //     <input
                        //         name="adressMail"
                        //         type="text"
                        //         className="form-control"
                        //         id="formGroupExampleInput"
                        //         placeholder="Write your adress Mail here"

                        //         onChange={this.onChange.bind(this)}
                        //     />
                        // </div>
                        // <div className="form-group">
                        //     <label htmlFor="formGroupExampleInput">Categorie</label>
                        //     <input
                        //         name="categories"
                        //         type="text"
                        //         className="form-control"
                        //         id="formGroupExampleInput"
                        //         placeholder="Write the categorie of the product here"
                        //         onChange={this.onChange.bind(this)}
                        //     />
                        // </div>
                        // <div className="form-group">
                        //     <label htmlFor="formGroupExampleInput">Description</label>
                        //     <input
                        //         name="description"
                        //         type="text"
                        //         className="form-control"
                        //         id="formGroupExampleInput"
                        //         placeholder="Write your description here"
                        //         onChange={this.onChange.bind(this)}
                        //     />
                        // </div>


                    //     <div className="form-group">
                    //         <label htmlFor="formGroupExampleInput">Price</label>
                    //         <input
                    //             name="price"
                    //             type="text"
                    //             className="form-control"
                    //             id="formGroupExampleInput"
                    //             placeholder="Write your price here"
                    //             onChange={this.onChange.bind(this)}
                    //         />
                    //     </div>
                    // </div>
                    <button onClick={this.createAproduct.bind(this)} type="button" className="btn btn-success">
                        Submit you product to sell
          </button>
                </div>
            </form > */}