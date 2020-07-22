import React from "react";
import ReactDOM from "react-dom";
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import "../dist/style.css"
import GuestSearchBar from "./components/GuestSearchBar.jsx";
import AdminInterface from './components/AdminInterface.jsx'
import UserInterface from './components/UserInterface.jsx'


class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <SignUp />
        <SignIn /> */}
        {/* <GuestSearchBar /> */}
        <AdminInterface />
        {/* <UserInterface /> */}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("app"));
