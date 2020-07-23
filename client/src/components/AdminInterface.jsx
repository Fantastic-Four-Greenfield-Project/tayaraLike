import React from "react";
import AdminNavbar from "./AdminNavbar.jsx";

class AdminInterface extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <center>
        <div className="hello">
          <AdminNavbar />
        </div>
      </center>
    );
  }
}

export default AdminInterface;
