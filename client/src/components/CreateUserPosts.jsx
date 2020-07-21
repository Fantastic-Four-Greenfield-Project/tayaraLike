import React from "react";

class CreateUserPosts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <div className="post-from">
          <div className="input-group-prepend"></div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />

            <label className="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Categories</option>
                  <option value="1">Cars</option>
                  <option value="2">Home Appliance</option>
                  <option value="3">Smart-Phones</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="formGroupExampleInput">Description</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Write your description here"
              />
            </div>

            <div class="form-group">
              <label for="formGroupExampleInput">Price</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Write your price here"
              />
            </div>
          </div>
          <button type="button" class="btn btn-success">
            Success
          </button>
        </div>
      </form>
    );
  }
}

export default CreateUserPosts;

24546935;
