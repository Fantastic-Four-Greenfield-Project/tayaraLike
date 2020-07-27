import React from "react";
import axios from "axios";
import { link } from 'react-router-dom'
// import ImageUploader from 'react-images-upload'

class SellAProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            profileImg: "",
            adressMail: "",
            categories: "",
            description: "",
            price: "",
            products: []
        }
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("/createImage", formData, {
        }).then(res => {
            console.log(res)
        })
    }

    onFileChange(e) {
        this.setState({
            profileImg: e.target.files[0]
        })
    }

    onChange(event) {
        event.preventDefault()
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

     
                <div>
                    <div className="custom-file">
                        <div className="row" >
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <input type="file" onChange={this.onFileChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Upload</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Mail Adress</label>
                        <input
                            name="adressMail"
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Write your adress Mail here"

                            onChange={this.onChange.bind(this)}
                        />
                    </div>

                    {/* <input onChange={this.onChange.bind(this)} name="adressMail" type="email" id="defaultLoginFormEmail" class="form-control mb-2" placeholder="E-mail" /> */}

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




                    {/* <input onChange={this.onChange.bind(this)} name="categories" type="text" id="exampleForm2" class="form-control" /> */}
                    <textarea onChange={this.onChange.bind(this)} name="description" class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>


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



                    {/* <input onChange={this.onChange.bind(this)} name="price" class="form-control form-control-sm" type="text" placeholder="Price in Tunisian Dinars" /> */}
                    <button onClick={this.createAproduct.bind(this)} type="button" className="btn btn-success">
                        Submit you product to sell
          </button>
                </div>
   
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