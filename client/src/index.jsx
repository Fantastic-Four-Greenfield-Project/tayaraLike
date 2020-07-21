import React from "react";
import ReactDOM from "react-dom";
import AdminInterface from "./components/AdminInterface.jsx";
import UserInterface from "./components/UserInterface.jsx";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <center>
        <div className="hello">
          {/* <AdminInterface /> */}
          <UserInterface />
        </div>
      </center>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("app"));
